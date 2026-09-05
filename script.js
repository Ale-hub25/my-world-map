mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlMjAwMCIsImEiOiJjbXRscmRtM2YwMmg0MnlzNnJqYmt6Y3ZvIn0.lAzCVjz_p9HW6KyXjNWKGQ';

// Configurazione Colori e Stili
let mapColors = JSON.parse(localStorage.getItem('carto_colors')) || {
    background: '#0f172a',
    water: '#0284c7',
    roads: '#334155',
    parks: '#15803d',
    buildings: '#1e293b'
};

let currentIconStyle = localStorage.getItem('carto_icon_style') || 'emoji';
let enable3d = JSON.parse(localStorage.getItem('carto_3d')) ?? true;

// Inizializzazione Mappa
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [12.4964, 41.9028],
    zoom: 13,
    pitch: 0,
    preserveDrawingBuffer: true
});

map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-left');

map.on('style.load', () => {
    applyCustomColors();
    setup3dLayer();
    renderZones();
});

// -------------------------------------------------------------
// 1. BARRA DI RICERCA LUOGHI (Nominatim Geocoding API)
// -------------------------------------------------------------
const searchInput = document.getElementById("searchInput");

async function searchLocation() {
    const query = searchInput.value.trim();
    if (!query) return;

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);

            map.flyTo({
                center: [lon, lat],
                zoom: 14,
                essential: true
            });
        } else {
            alert("Nessun luogo trovato. Prova con un altro nome.");
        }
    } catch (error) {
        console.error("Errore durante la ricerca:", error);
        alert("Impossibile completare la ricerca in questo momento.");
    }
}

if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            searchLocation();
        }
    });
}

// -------------------------------------------------------------
// FUNZIONI UTILI & STILI PERSONALIZZATI
// -------------------------------------------------------------
function getContrastingTextColor(hexColor) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#0f172a' : '#ffffff';
}

function applyCustomColors() {
    if (!map.isStyleLoaded()) return;

    if (map.getLayer('background')) map.setPaintProperty('background', 'background-color', mapColors.background);
    if (map.getLayer('water')) map.setPaintProperty('water', 'fill-color', mapColors.water);
    if (map.getLayer('road-simple')) map.setPaintProperty('road-simple', 'line-color', mapColors.roads);
    if (map.getLayer('landuse')) map.setPaintProperty('landuse', 'fill-color', mapColors.parks);
    if (map.getLayer('building')) map.setPaintProperty('building', 'fill-color', mapColors.buildings);

    localStorage.setItem('carto_colors', JSON.stringify(mapColors));
}

function setup3dLayer() {
    if (map.getLayer('3d-buildings')) map.removeLayer('3d-buildings');

    if (enable3d) {
        map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': mapColors.buildings,
                'fill-extrusion-height': ['get', 'height'],
                'fill-extrusion-base': ['get', 'min_height'],
                'fill-extrusion-opacity': 0.8
            }
        });
    }
}

// -------------------------------------------------------------
// GESTIONE PIN & ZONE
// -------------------------------------------------------------
let places = JSON.parse(localStorage.getItem('myGameMap_places')) || {};
let zones = JSON.parse(localStorage.getItem('myGameMap_zones')) || {};
let activeMarkers = {};
let zoneLabelMarkers = {};
let currentSelectedPlaceId = null;
let currentSelectedZoneId = null;
let pendingCoords = null;

let isDrawingZone = false;
let zonePoints = [];
let tempMarkers = [];

function renderMarkers() {
    Object.keys(activeMarkers).forEach(id => activeMarkers[id].remove());
    activeMarkers = {};

    Object.keys(places).forEach(id => {
        const item = places[id];
        const el = document.createElement('div');
        el.className = `custom-pin style-${currentIconStyle}`;
        el.innerHTML = item.icon || '📍';

        const marker = new mapboxgl.Marker(el)
            .setLngLat([item.lng, item.lat])
            .addTo(map);

        el.addEventListener('click', (e) => {
            e.stopPropagation();
            openPlace(id);
        });
        activeMarkers[id] = marker;
    });
}

function getPolygonCenter(coords) {
    let pts = coords;
    if (pts[0] && Array.isArray(pts[0][0])) pts = pts[0];
    let sumLng = 0, sumLat = 0;
    pts.forEach(p => {
        sumLng += p[0];
        sumLat += p[1];
    });
    return [sumLng / pts.length, sumLat / pts.length];
}

function renderZones() {
    if (!map.isStyleLoaded()) return;

    Object.keys(zoneLabelMarkers).forEach(id => zoneLabelMarkers[id].remove());
    zoneLabelMarkers = {};

    Object.keys(zones).forEach(zoneId => {
        const zone = zones[zoneId];
        const sourceId = `source-${zoneId}`;
        const fillLayerId = `fill-${zoneId}`;
        const lineLayerId = `line-${zoneId}`;

        const geojson = {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [zone.coordinates]
            }
        };

        if (map.getSource(sourceId)) {
            map.getSource(sourceId).setData(geojson);
        } else {
            map.addSource(sourceId, { 'type': 'geojson', 'data': geojson });

            map.addLayer({
                'id': fillLayerId,
                'type': 'fill',
                'source': sourceId,
                'paint': {
                    'fill-color': '#0284c7',
                    'fill-opacity': 0.35
                }
            });

            map.addLayer({
                'id': lineLayerId,
                'type': 'line',
                'source': sourceId,
                'paint': {
                    'line-color': '#38bdf8',
                    'line-width': 2
                }
            });

            map.on('click', fillLayerId, (e) => {
                e.stopPropagation();
                openZone(zoneId);
            });
        }

        // MOSTRA SOLO IL NOME DEL QUARTIERE (Puro Testo, senza icone)
        const center = getPolygonCenter(zone.coordinates);
        const textColor = getContrastingTextColor(mapColors.background);
        
        const labelEl = document.createElement('div');
        labelEl.className = 'zone-label-marker';
        labelEl.style.color = textColor;
        labelEl.textContent = zone.name;
        
        const labelMarker = new mapboxgl.Marker({ element: labelEl, anchor: 'center' })
            .setLngLat(center)
            .addTo(map);

        labelEl.addEventListener('click', (e) => {
            e.stopPropagation();
            openZone(zoneId);
        });

        zoneLabelMarkers[zoneId] = labelMarker;
    });
}

// -------------------------------------------------------------
// TRACCIAMENTO QUARTIERI
// -------------------------------------------------------------
document.getElementById("addZoneOption").addEventListener("click", () => {
    document.getElementById("addMenu").classList.add("hidden");
    document.getElementById("zonePicker").classList.remove("hidden");
    isDrawingZone = true;
    zonePoints = [];
    clearTempZoneDraft();
});

map.on('click', (e) => {
    if (!isDrawingZone) return;

    const lngLat = [e.lngLat.lng, e.lngLat.lat];
    zonePoints.push(lngLat);

    const el = document.createElement('div');
    el.className = 'zone-vertex-marker';
    const marker = new mapboxgl.Marker(el).setLngLat(lngLat).addTo(map);
    tempMarkers.push(marker);

    updateDraftZoneLine();

    if (zonePoints.length >= 3) {
        document.getElementById("confirmZone").removeAttribute("disabled");
        document.getElementById("zoneInstruction").textContent = `Vertici inseriti: ${zonePoints.length}. Puoi confermare!`;
    } else {
        document.getElementById("zoneInstruction").textContent = `Mancano ancora ${3 - zonePoints.length} vertici...`;
    }
});

function updateDraftZoneLine() {
    const geojson = {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': zonePoints
        }
    };

    if (map.getSource('temp-zone-line')) {
        map.getSource('temp-zone-line').setData(geojson);
    } else {
        map.addSource('temp-zone-line', { 'type': 'geojson', 'data': geojson });
        map.addLayer({
            'id': 'temp-zone-line-layer',
            'type': 'line',
            'source': 'temp-zone-line',
            'paint': {
                'line-color': '#ef4444',
                'line-width': 3,
                'line-dasharray': [2, 2]
            }
        });
    }
}

function clearTempZoneDraft() {
    tempMarkers.forEach(m => m.remove());
    tempMarkers = [];
    if (map.getLayer('temp-zone-line-layer')) map.removeLayer('temp-zone-line-layer');
    if (map.getSource('temp-zone-line')) map.removeSource('temp-zone-line');
}

document.getElementById("cancelZone").addEventListener("click", () => {
    isDrawingZone = false;
    clearTempZoneDraft();
    zonePoints = [];
    document.getElementById("zonePicker").classList.add("hidden");
});

document.getElementById("confirmZone").addEventListener("click", () => {
    if (zonePoints.length < 3) return alert("Inserisci almeno 3 vertici per definire un quartiere!");
    
    zonePoints.push(zonePoints[0]);
    isDrawingZone = false;
    clearTempZoneDraft();

    document.getElementById("zonePicker").classList.add("hidden");
    document.getElementById("zoneModalTitle").textContent = "📐 Assegna Nome al Quartiere";
    document.getElementById("zoneNameInput").value = "";
    document.getElementById("zoneModal").classList.add("open");
});

document.getElementById("saveZoneName").addEventListener("click", () => {
    const name = document.getElementById("zoneNameInput").value.trim() || "Nuovo Quartiere";
    
    if (currentSelectedZoneId && !isDrawingZone) {
        zones[currentSelectedZoneId].name = name;
    } else {
        const id = `zone-${Date.now()}`;
        zones[id] = {
            name: name,
            coordinates: zonePoints
        };
    }

    localStorage.setItem('myGameMap_zones', JSON.stringify(zones));
    renderZones();
    document.getElementById("zoneModal").classList.remove("open");
    zonePoints = [];
});

document.getElementById("closeZoneModal").addEventListener("click", () => document.getElementById("zoneModal").classList.remove("open"));

// -------------------------------------------------------------
// MODALI E BOTTOM SHEETS
// -------------------------------------------------------------
function openPlace(id) {
    currentSelectedPlaceId = id;
    const place = places[id];
    document.getElementById("placeIcon").textContent = place.icon;
    document.getElementById("placeName").textContent = place.name;
    document.getElementById("placeCategory").textContent = place.category;
    document.getElementById("placeNote").textContent = place.note || "Nessuna nota presente.";
    
    document.getElementById("placeSheet").classList.add("open");
}

document.getElementById("closeSheet").addEventListener("click", () => document.getElementById("placeSheet").classList.remove("open"));

document.getElementById("editPlaceBtn").addEventListener("click", () => {
    if (!currentSelectedPlaceId) return;
    const place = places[currentSelectedPlaceId];

    document.getElementById("placeInput").value = place.name;
    document.getElementById("customEmojiInput").value = place.icon;
    document.getElementById("noteInput").value = place.note || "";
    
    document.getElementById("placeSheet").classList.remove("open");
    document.getElementById("addModalTitle").textContent = "✏️ Modifica Luogo";
    document.getElementById("addModal").classList.add("open");
});

document.getElementById("deletePlaceBtn").addEventListener("click", () => {
    if (!currentSelectedPlaceId) return;
    delete places[currentSelectedPlaceId];
    localStorage.setItem('myGameMap_places', JSON.stringify(places));
    renderMarkers();
    document.getElementById("placeSheet").classList.remove("open");
});

function openZone(id) {
    currentSelectedZoneId = id;
    document.getElementById("zoneSheetName").textContent = zones[id].name;
    document.getElementById("zoneSheet").classList.add("open");
}

document.getElementById("closeZoneSheet").addEventListener("click", () => document.getElementById("zoneSheet").classList.remove("open"));

document.getElementById("editZoneBtn").addEventListener("click", () => {
    if (!currentSelectedZoneId) return;
    document.getElementById("zoneNameInput").value = zones[currentSelectedZoneId].name;
    document.getElementById("zoneSheet").classList.remove("open");
    document.getElementById("zoneModalTitle").textContent = "✏️ Modifica Nome Quartiere";
    document.getElementById("zoneModal").classList.add("open");
});

document.getElementById("deleteZoneBtn").addEventListener("click", () => {
    if (!currentSelectedZoneId) return;
    const zoneId = currentSelectedZoneId;
    if (map.getLayer(`fill-${zoneId}`)) map.removeLayer(`fill-${zoneId}`);
    if (map.getLayer(`line-${zoneId}`)) map.removeLayer(`line-${zoneId}`);
    if (map.getSource(`source-${zoneId}`)) map.removeSource(`source-${zoneId}`);

    if (zoneLabelMarkers[zoneId]) {
        zoneLabelMarkers[zoneId].remove();
        delete zoneLabelMarkers[zoneId];
    }

    delete zones[zoneId];
    localStorage.setItem('myGameMap_zones', JSON.stringify(zones));
    document.getElementById("zoneSheet").classList.remove("open");
});

// Aggiunta Pin
document.getElementById("addOptionButton").addEventListener("click", () => document.getElementById("addMenu").classList.toggle("hidden"));
document.getElementById("addPinOption").addEventListener("click", () => {
    document.getElementById("addMenu").classList.add("hidden");
    document.getElementById("mapPicker").classList.remove("hidden");
});
document.getElementById("cancelPick").addEventListener("click", () => document.getElementById("mapPicker").classList.add("hidden"));
document.getElementById("confirmPick").addEventListener("click", () => {
    pendingCoords = map.getCenter();
    currentSelectedPlaceId = null;
    document.getElementById("addModalTitle").textContent = "📍 Nuovo Luogo";
    document.getElementById("placeInput").value = "";
    document.getElementById("customEmojiInput").value = "";
    document.getElementById("noteInput").value = "";
    document.getElementById("mapPicker").classList.add("hidden");
    document.getElementById("addModal").classList.add("open");
});

document.getElementById("savePlace").addEventListener("click", () => {
    const name = document.getElementById("placeInput").value.trim();
    if (!name) return alert("Inserisci un nome!");

    const [catName, defaultIcon] = document.getElementById("categoryInput").value.split("|");
    const customEmoji = document.getElementById("customEmojiInput").value.trim();
    
    if (currentSelectedPlaceId) {
        places[currentSelectedPlaceId].name = name;
        places[currentSelectedPlaceId].icon = customEmoji || defaultIcon;
        places[currentSelectedPlaceId].category = catName;
        places[currentSelectedPlaceId].note = document.getElementById("noteInput").value;
    } else {
        const id = `place-${Date.now()}`;
        places[id] = {
            name: name,
            icon: customEmoji || defaultIcon,
            category: catName,
            note: document.getElementById("noteInput").value || "",
            lat: pendingCoords.lat,
            lng: pendingCoords.lng
        };
    }

    localStorage.setItem('myGameMap_places', JSON.stringify(places));
    renderMarkers();
    document.getElementById("addModal").classList.remove("open");
});

document.getElementById("closeModal").addEventListener("click", () => document.getElementById("addModal").classList.remove("open"));

// Gestione Editor Colori e Stile
document.getElementById("colorBackground").addEventListener("input", (e) => { mapColors.background = e.target.value; applyCustomColors(); renderZones(); });
document.getElementById("colorWater").addEventListener("input", (e) => { mapColors.water = e.target.value; applyCustomColors(); });
document.getElementById("colorRoads").addEventListener("input", (e) => { mapColors.roads = e.target.value; applyCustomColors(); });
document.getElementById("colorParks").addEventListener("input", (e) => { mapColors.parks = e.target.value; applyCustomColors(); });
document.getElementById("colorBuildings").addEventListener("input", (e) => { mapColors.buildings = e.target.value; applyCustomColors(); setup3dLayer(); });

document.getElementById("toggle3d").addEventListener("change", (e) => {
    enable3d = e.target.checked;
    localStorage.setItem('carto_3d', JSON.stringify(enable3d));
    setup3dLayer();
});

document.getElementById("iconStyleSelect").addEventListener("change", (e) => {
    currentIconStyle = e.target.value;
    localStorage.setItem('carto_icon_style', currentIconStyle);
    renderMarkers();
});

document.getElementById("editorButton").addEventListener("click", () => document.getElementById("editorModal").classList.add("open"));
document.getElementById("closeEditor").addEventListener("click", () => document.getElementById("editorModal").classList.remove("open"));

document.getElementById("profileNavBtn").addEventListener("click", () => {
    document.getElementById("totalPinsCount").textContent = Object.keys(places).length;
    document.getElementById("totalZonesCount").textContent = Object.keys(zones).length;
    document.getElementById("profileModal").classList.add("open");
});
document.getElementById("closeProfile").addEventListener("click", () => document.getElementById("profileModal").classList.remove("open"));

// Pulsante GPS Posizione Attuale
document.getElementById("gpsButton").addEventListener("click", () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            map.flyTo({
                center: [position.coords.longitude, position.coords.latitude],
                zoom: 15
            });
        }, () => {
            alert("Impossibile accedere alla tua posizione attuale.");
        });
    }
});

// APERTURA LAYOUT DI ANTEPRIMA CON DRAG & DROP E PROPORZIONI CORRETTE
document.getElementById("printMapBtn").addEventListener("click", () => {
    const title = document.getElementById("printTitleInput")?.value || "Mappa My World Map";
    
    // Catturiamo le dimensioni reali della mappa a schermo per mantenere le proporzioni esatte
    const mapCanvas = map.getCanvas();
    const aspectWidth = mapCanvas.clientWidth;
    const aspectHeight = mapCanvas.clientHeight;
    const mapDataUrl = mapCanvas.toDataURL('image/jpeg', 1.0);

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Layout Mappa - ${title}</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
                <style>
                    * { box-sizing: border-box; }

                    body { 
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
                        margin: 0; 
                        padding: 20px; 
                        background: #0f172a; 
                        color: #fff; 
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        user-select: none; 
                    }

                    .print-btn-bar { 
                        display: flex;
                        gap: 15px;
                        margin-bottom: 15px; 
                        align-items: center;
                    }

                    .print-btn-jpg { 
                        background: #10b981; 
                        color: white; 
                        border: none; 
                        padding: 12px 24px; 
                        font-weight: bold; 
                        border-radius: 8px; 
                        cursor: pointer; 
                        font-size: 15px; 
                        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                        transition: transform 0.1s ease;
                    }

                    .print-btn-jpg:hover { transform: scale(1.02); }

                    .hint-box { font-size: 13px; color: #94a3b8; }
                    
                    /* CONTENITORE MAPPA: Proporzioni calcolate dinamicamente senza distorsioni */
                    .map-frame {
                        position: relative;
                        width: 90vw;
                        max-width: 1100px;
                        aspect-ratio: ${aspectWidth} / ${aspectHeight};
                        background: ${typeof mapColors !== 'undefined' ? mapColors.background : '#1e293b'};
                        border: 2px solid #334155;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                        overflow: hidden;
                        border-radius: 6px;
                    }

                    .map-img { 
                        width: 100%; 
                        height: 100%; 
                        object-fit: contain; 
                        display: block; 
                    }
                    
                    /* Elementi Trascinabili */
                    .draggable {
                        position: absolute;
                        cursor: move;
                        background: rgba(15, 23, 42, 0.9);
                        backdrop-filter: blur(8px);
                        border: 1px dashed rgba(255,255,255,0.4);
                        padding: 10px 14px;
                        border-radius: 8px;
                        color: #ffffff;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.4);
                        z-index: 100;
                    }

                    #drag-title { top: 20px; left: 20px; font-size: 18px; font-weight: bold; }
                    
                    /* Bussola Cartografica */
                    #drag-compass { 
                        top: 20px; 
                        right: 20px; 
                        display: flex; 
                        flex-direction: column; 
                        align-items: center; 
                        padding: 8px 12px;
                    }
                    .modern-north-arrow {
                        width: 0;
                        height: 0;
                        border-left: 9px solid transparent;
                        border-right: 9px solid transparent;
                        border-bottom: 24px solid #38bdf8;
                        margin-bottom: 2px;
                    }
                    .north-label { font-size: 11px; font-weight: 800; color: #f8fafc; }

                    /* Scala Grafica */
                    #drag-scale { bottom: 20px; left: 20px; }
                    .scale-container { display: flex; flex-direction: column; gap: 4px; }
                    .scale-bar-segments { display: flex; width: 120px; height: 6px; border: 1px solid #ffffff; }
                    .scale-segment-black { width: 50%; height: 100%; background: #ffffff; }
                    .scale-segment-white { width: 50%; height: 100%; background: rgba(255, 255, 255, 0.2); }
                    .scale-labels { display: flex; justify-content: space-between; font-size: 10px; font-weight: bold; }

                    /* Legenda */
                    #drag-legend { top: 90px; right: 20px; max-width: 260px; text-align: left; }
                    .legend-list { list-style: none; padding: 0; margin: 6px 0 0 0; }
                    .legend-item { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
                    .editable-label { background: transparent; border: none; border-bottom: 1px dashed rgba(255,255,255,0.3); color: white; padding: 2px 4px; font-size: 13px; width: 100%; outline: none; }
                </style>
            </head>
            <body>
                <div class="print-btn-bar">
                    <button class="print-btn-jpg" onclick="downloadJPEG()">🖼️ Scarica Mappa in JPEG</button>
                    <div class="hint-box">💡 Trascina gli elementi sulla mappa per posizionarli prima di scaricare.</div>
                </div>

                <div class="map-frame" id="mapFrame">
                    <img class="map-img" src="${mapDataUrl}" alt="Mappa" />
                    
                    <!-- Titolo Modificabile e Trascinabile -->
                    <div id="drag-title" class="draggable">
                        <input type="text" class="editable-label" value="${title}" style="font-size: 18px; font-weight: bold;" />
                    </div>

                    <!-- Bussola Cartografica -->
                    <div id="drag-compass" class="draggable">
                        <div class="modern-north-arrow"></div>
                        <span class="north-label">N</span>
                    </div>

                    <!-- Scala Grafica -->
                    <div id="drag-scale" class="draggable">
                        <div class="scale-container">
                            <div class="scale-labels">
                                <span>0</span>
                                <span>250m</span>
                                <span>500m</span>
                            </div>
                            <div class="scale-bar-segments">
                                <div class="scale-segment-black"></div>
                                <div class="scale-segment-white"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Legenda (Solo Pin Luoghi) -->
                    <div id="drag-legend" class="draggable">
                        <strong style="font-size: 13px; letter-spacing: 0.5px;">LEGENDA</strong>
                        <ul class="legend-list">
                            ${typeof places !== 'undefined' ? Object.values(places).map(p => `
                                <li class="legend-item">
                                    <span>${p.icon || '📍'}</span>
                                    <input type="text" class="editable-label" value="${p.name}" />
                                </li>
                            `).join('') : ''}
                        </ul>
                    </div>
                </div>

                <script>
                    // Sistema Drag & Drop per gli elementi del layout
                    const draggables = document.querySelectorAll('.draggable');
                    const container = document.getElementById('mapFrame');

                    draggables.forEach(elmnt => {
                        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                        elmnt.onmousedown = dragMouseDown;

                        function dragMouseDown(e) {
                            if (e.target.tagName === 'INPUT') return;
                            e.preventDefault();
                            pos3 = e.clientX;
                            pos4 = e.clientY;
                            document.onmouseup = closeDragElement;
                            document.onmousemove = elementDrag;
                        }

                        function elementDrag(e) {
                            e.preventDefault();
                            pos1 = pos3 - e.clientX;
                            pos2 = pos4 - e.clientY;
                            pos3 = e.clientX;
                            pos4 = e.clientY;

                            let newTop = elmnt.offsetTop - pos2;
                            let newLeft = elmnt.offsetLeft - pos1;

                            if (newTop >= 0 && newTop <= container.clientHeight - elmnt.clientHeight) {
                                elmnt.style.top = newTop + "px";
                            }
                            if (newLeft >= 0 && newLeft <= container.clientWidth - elmnt.clientWidth) {
                                elmnt.style.left = newLeft + "px";
                            }
                        }

                        function closeDragElement() {
                            document.onmouseup = null;
                            document.onmousemove = null;
                        }
                    });

                    // Generazione JPEG pulita ed esatta
                    function downloadJPEG() {
                        const frame = document.getElementById('mapFrame');
                        const inputs = frame.querySelectorAll('input');
                        const temporarySpans = [];

                        // Convertiamo temporaneamente gli input in span per evitare sovrapposizioni e sfocature
                        inputs.forEach(input => {
                            const span = document.createElement('span');
                            span.innerText = input.value;
                            span.style.fontSize = window.getComputedStyle(input).fontSize;
                            span.style.fontWeight = window.getComputedStyle(input).fontWeight;
                            span.style.color = '#ffffff';
                            span.style.display = 'inline-block';
                            span.style.lineHeight = '1.2';

                            input.parentNode.insertBefore(span, input);
                            input.style.display = 'none';
                            temporarySpans.push({ input, span });
                        });

                        draggables.forEach(d => {
                            d.style.border = 'none';
                            d.style.backdropFilter = 'none';
                            d.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                        });

                        html2canvas(frame, { 
                            useCORS: true, 
                            allowTaint: true, 
                            scale: 2,
                            logging: false
                        }).then(canvas => {
                            const link = document.createElement('a');
                            link.download = '${title.replace(/[^a-zA-Z0-9]/g, '_')}.jpg';
                            link.href = canvas.toDataURL('image/jpeg', 0.95);
                            link.click();
                            
                            // Ripristiniamo l'editor di layout
                            temporarySpans.forEach(({ input, span }) => {
                                input.style.display = '';
                                span.remove();
                            });

                            draggables.forEach(d => {
                                d.style.border = '1px dashed rgba(255,255,255,0.4)';
                                d.style.backdropFilter = 'blur(8px)';
                                d.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
                            });
                        });
                    }
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
});
