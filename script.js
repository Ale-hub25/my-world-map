let userMapStyle = JSON.parse(localStorage.getItem('cartoQuest_mapStyle')) || { 
    iconStyle: 'classico', 
    colors: {
        terrain: '#0f172a',
        water: '#1e3a8a',
        building: '#1e293b',
        road: '#334155'
    }
};

let userProfile = JSON.parse(localStorage.getItem('cartoQuest_user')) || { name: "Utente", avatar: "" };

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/dark',
    center: [12.4964, 41.9028],
    zoom: 15,
    pitch: 0,
    bearing: 0,
    preserveDrawingBuffer: true
});

let gpsMarker = null;

map.on('load', () => {
    applyMapColors();
    enable3DBuildings();
    renderMarkers();
    renderZones();
});

function enable3DBuildings() {
    const layers = map.getStyle().layers;
    let labelLayerId;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    layers.forEach(layer => {
        if (layer.id.includes('building') && layer.type === 'fill') {
            const id = layer.id;
            const paint = layer.paint || {};
            
            if (!map.getLayer(id + '-3d')) {
                map.addLayer({
                    'id': id + '-3d',
                    'source': layer.source,
                    'source-layer': layer['source-layer'],
                    'minzoom': 14.5, // Gli edifici appaiono leggermente prima
                    'type': 'fill-extrusion',
                    'filter': layer.filter,
                    'paint': {
                        'fill-extrusion-color': paint['fill-color'] || userMapStyle.colors.building,
                        'fill-extrusion-height': [
                            'interpolate', ['linear'], ['zoom'],
                            14.5, 0,
                            15.5, ['get', 'render_height']
                        ],
                        'fill-extrusion-base': [
                            'interpolate', ['linear'], ['zoom'],
                            14.5, 0,
                            15.5, ['get', 'render_min_height']
                        ],
                        'fill-extrusion-opacity': 0.95,
                        // Effetto ombra/sfumatura verticale tipico di Mapbox Studio
                        'fill-extrusion-vertical-gradient': true
                    }
                }, labelLayerId);
            }
        }
    });

    // Configurazione della luce ambientale/direzionale per dare volume e rilievo
    if (map.setLight) {
        map.setLight({
            'anchor': 'viewport',
            'color': '#ffffff',
            'intensity': 0.5,
            'position': [1.5, 180, 45] // Luce inclinata per evidenziare i profili dei tetti
        });
    }
}

function applyMapColors() {
    const c = userMapStyle.colors;
    try {
        if (map.getLayer('background')) {
            map.setPaintProperty('background', 'background-color', c.terrain);
        }
        const layers = map.getStyle().layers;
        layers.forEach(layer => {
            if (layer.id.includes('water') && layer.type === 'fill') {
                map.setPaintProperty(layer.id, 'fill-color', c.water);
            }
            if (layer.id.includes('building') && layer.type === 'fill') {
                map.setPaintProperty(layer.id, 'fill-color', c.building);
            }
            if (map.getLayer(layer.id + '-3d')) {
                map.setPaintProperty(layer.id + '-3d', 'fill-extrusion-color', c.building);
            }
            // Sostituisci questo controllo per catturare interamente ogni linea stradale e bordo
            if (layer.type === 'line') {
                map.setPaintProperty(layer.id, 'line-color', c.road);
            }
        });
    } catch (err) {
        console.log("Aggiornamento colori strati...", err);
    }
}
function loadStyleUI() {
    document.getElementById('colorTerrain').value = userMapStyle.colors.terrain;
    document.getElementById('colorWater').value = userMapStyle.colors.water;
    document.getElementById('colorBuilding').value = userMapStyle.colors.building;
    document.getElementById('colorRoad').value = userMapStyle.colors.road;
    document.getElementById('iconStyleSelect').value = userMapStyle.iconStyle;
}

document.getElementById('applyStyle').addEventListener('click', () => {
    userMapStyle.colors.terrain = document.getElementById('colorTerrain').value;
    userMapStyle.colors.water = document.getElementById('colorWater').value;
    userMapStyle.colors.building = document.getElementById('colorBuilding').value;
    userMapStyle.colors.road = document.getElementById('colorRoad').value;
    userMapStyle.iconStyle = document.getElementById('iconStyleSelect').value;

    localStorage.setItem('cartoQuest_mapStyle', JSON.stringify(userMapStyle));
    applyMapColors();
    renderMarkers();
    document.getElementById('styleModal').classList.remove('open');
});

let places = JSON.parse(localStorage.getItem('cartoQuest_places')) || {
    "p1": { name: "Taverna Central", icon: "🍺", category: "Pub", tags: ["birra"], note: "Ottimo spot.", photo: "", lat: 41.9028, lng: 12.4964 }
};
let zones = JSON.parse(localStorage.getItem('cartoQuest_zones')) || {};

let activeMarkers = [];
let activeZoneLabels = [];
let currentSelectedPlaceId = null;
let currentSelectedZoneId = null;
let pendingCoords = null;
let isEditingPlace = false;
let isEditingZone = false;
let isDrawingZone = false;
let currentZonePoints = [];

function saveState() {
    localStorage.setItem('cartoQuest_places', JSON.stringify(places));
    localStorage.setItem('cartoQuest_zones', JSON.stringify(zones));
    localStorage.setItem('cartoQuest_user', JSON.stringify(userProfile));
    updateProfileStats();
}

function renderMarkers() {
    activeMarkers.forEach(m => m.remove());
    activeMarkers = [];

    Object.keys(places).forEach(id => {
        const item = places[id];
        const el = document.createElement('div');
        el.className = 'custom-pin-wrapper';
        
        if (userMapStyle.iconStyle === 'neon') {
            el.innerHTML = `<div class="pin-neon">${item.icon}</div>`;
        } else if (userMapStyle.iconStyle === 'minimal') {
            el.innerHTML = `<div class="pin-minimal"><span>${item.icon}</span></div>`;
        } else {
            el.innerHTML = `<div class="pin-classico">${item.icon}</div>`;
        }

        el.addEventListener('click', (e) => {
            e.stopPropagation();
            openPlace(id);
        });

        const marker = new maplibregl.Marker({ element: el })
            .setLngLat([item.lng, item.lat])
            .addTo(map);

        activeMarkers.push(marker);
    });
}

function getPolygonCentroid(points) {
    let x = 0, y = 0, n = points.length;
    for (let i = 0; i < n; i++) {
        x += points[i][1];
        y += points[i][0];
    }
    return [x / n, y / n];
}

function renderZones() {
    activeZoneLabels.forEach(m => m.remove());
    activeZoneLabels = [];

    if (!map.getSource('zones-source')) {
        map.addSource('zones-source', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
        map.addLayer({
            id: 'zones-fill',
            type: 'fill',
            source: 'zones-source',
            paint: { 'fill-color': '#38bdf8', 'fill-opacity': 0.25 }
        });
        map.addLayer({
            id: 'zones-border',
            type: 'line',
            source: 'zones-source',
            paint: { 'line-color': '#38bdf8', 'line-width': 2 }
        });

        map.on('click', 'zones-fill', (e) => {
            if (e.features.length > 0) {
                openZoneSheet(e.features[0].properties.id);
            }
        });
    }

    const features = [];
    Object.keys(zones).forEach(id => {
        const z = zones[id];
        if (z.points && z.points.length > 0) {
            const coords = z.points.map(p => [p[1], p[0]]);
            coords.push(coords[0]);
            features.push({
                type: 'Feature',
                properties: { id: id, name: z.name },
                geometry: { type: 'Polygon', coordinates: [coords] }
            });

            const centroid = getPolygonCentroid(z.points);
            const labelEl = document.createElement('div');
            labelEl.className = 'zone-label';
            labelEl.textContent = `📍 ${z.name}`;
            labelEl.addEventListener('click', () => openZoneSheet(id));

            const zoneMarker = new maplibregl.Marker({ element: labelEl })
                .setLngLat(centroid)
                .addTo(map);

            activeZoneLabels.push(zoneMarker);
        }
    });

    if (map.getSource('zones-source')) {
        map.getSource('zones-source').setData({
            type: 'FeatureCollection',
            features: features
        });
    }
}

function loadProfileUI() {
    document.getElementById('profileNameInput').value = userProfile.name || "";
    document.getElementById('profileAvatarInput').value = userProfile.avatar || "";
    const imgEl = document.getElementById("profileAvatarImg");
    const placeholderEl = document.getElementById("avatarPlaceholder");
    if (userProfile.avatar) {
        imgEl.src = userProfile.avatar;
        imgEl.classList.remove("hidden");
        placeholderEl.classList.add("hidden");
    } else {
        imgEl.classList.add("hidden");
        placeholderEl.classList.remove("hidden");
    }
    updateProfileStats();
}

function updateProfileStats() {
    document.getElementById("totalPinsCount").textContent = Object.keys(places).length;
}

document.getElementById("saveProfileAvatar").addEventListener("click", () => {
    userProfile.name = document.getElementById("profileNameInput").value.trim() || "Utente";
    userProfile.avatar = document.getElementById("profileAvatarInput").value.trim();
    saveState();
    loadProfileUI();
    alert("Profilo aggiornato!");
});

const placeSheet = document.getElementById("placeSheet");
function openPlace(id) {
    currentSelectedPlaceId = id;
    const place = places[id];
    if (!place) return;

    document.getElementById("placeIcon").textContent = place.icon;
    document.getElementById("placeName").textContent = place.name;
    document.getElementById("placeCategory").textContent = `${place.icon} ${place.category}`;
    document.getElementById("placeNote").textContent = place.note;

    const imgContainer = document.getElementById("placeImageContainer");
    if (place.photo) {
        document.getElementById("placeImage").src = place.photo;
        imgContainer.classList.remove("hidden");
    } else imgContainer.classList.add("hidden");

    const tagsContainer = document.getElementById("placeTags");
    tagsContainer.innerHTML = "";
    (place.tags || []).forEach(t => {
        if(t && t.trim()) {
            const span = document.createElement("span");
            span.textContent = `#${t.trim()} `;
            tagsContainer.appendChild(span);
        }
    });
    placeSheet.classList.add("open");
}

document.getElementById("deletePlaceBtn").addEventListener("click", () => {
    if (currentSelectedPlaceId && confirm("Eliminare questo pin?")) {
        delete places[currentSelectedPlaceId];
        saveState();
        placeSheet.classList.remove("open");
        renderMarkers();
    }
});

document.getElementById("editPlaceBtn").addEventListener("click", () => {
    const place = places[currentSelectedPlaceId];
    if (!place) return;
    
    isEditingPlace = true;
    document.getElementById("modalTitle").textContent = "Modifica Pin";
    document.getElementById("placeInput").value = place.name;
    document.getElementById("customEmojiInput").value = place.icon;
    document.getElementById("tagsInput").value = (place.tags || []).join(",");
    document.getElementById("photoInput").value = place.photo || "";
    document.getElementById("noteInput").value = place.note || "";
    
    placeSheet.classList.remove("open");
    document.getElementById("addModal").classList.add("open");
});

const zoneSheet = document.getElementById("zoneSheet");
function openZoneSheet(id) {
    currentSelectedZoneId = id;
    document.getElementById("zoneSheetName").textContent = zones[id].name;
    zoneSheet.classList.add("open");
}

document.getElementById("deleteZoneBtn").addEventListener("click", () => {
    if (currentSelectedZoneId && zones[currentSelectedZoneId]) {
        if (confirm(`Eliminare la zona "${zones[currentSelectedZoneId].name}"?`)) {
            delete zones[currentSelectedZoneId];
            saveState();
            renderZones();
            zoneSheet.classList.remove("open");
        }
    }
});

document.getElementById("editZoneBtn").addEventListener("click", () => {
    const zone = zones[currentSelectedZoneId];
    if (!zone) return;
    isEditingZone = true;
    document.getElementById("zoneNameInput").value = zone.name;
    zoneSheet.classList.remove("open");
    document.getElementById("zoneModal").classList.add("open");
});

document.getElementById("closeZoneSheet").addEventListener("click", () => zoneSheet.classList.remove("open"));

document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        const query = this.value.trim();
        if (!query) return;
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    map.flyTo({ center: [parseFloat(data[0].lon), parseFloat(data[0].lat)], zoom: 15, pitch: 0 });
                } else alert("Luogo non trovato.");
            });
    }
});

document.getElementById("gpsButton").addEventListener("click", () => {
    if (!navigator.geolocation) {
        return alert("La geolocalizzazione non è supportata da questo dispositivo/browser.");
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(pos => {
        const lng = pos.coords.longitude;
        const lat = pos.coords.latitude;

        map.flyTo({ center: [lng, lat], zoom: 16, pitch: 0 });

        if (gpsMarker) gpsMarker.remove();
        const el = document.createElement('div');
        el.className = 'gps-marker-dot';
        gpsMarker = new maplibregl.Marker({ element: el })
            .setLngLat([lng, lat])
            .addTo(map);
    }, err => {
        console.error("Errore GPS:", err);
        alert(`Errore GPS (${err.code}): ${err.message}. Assicurati di aver concesso i permessi di posizione all'app.`);
    }, options);
});
document.getElementById("addOptionButton").addEventListener("click", () => {
    document.getElementById("addMenu").classList.toggle("hidden");
});

document.getElementById("addPinOption").addEventListener("click", () => {
    document.getElementById("addMenu").classList.add("hidden");
    document.getElementById("mapPicker").classList.remove("hidden");
});
document.getElementById("cancelPick").addEventListener("click", () => {
    document.getElementById("mapPicker").classList.add("hidden");
});
document.getElementById("confirmPick").addEventListener("click", () => {
    const center = map.getCenter();
    pendingCoords = { lat: center.lat, lng: center.lng };
    isEditingPlace = false;
    document.getElementById("modalTitle").textContent = "Nuovo Pin";
    document.getElementById("placeInput").value = "";
    document.getElementById("customEmojiInput").value = "";
    document.getElementById("tagsInput").value = "";
    document.getElementById("photoInput").value = "";
    document.getElementById("noteInput").value = "";

    document.getElementById("mapPicker").classList.add("hidden");
    document.getElementById("addModal").classList.add("open");
});

document.getElementById("savePlace").addEventListener("click", () => {
    const name = document.getElementById("placeInput").value.trim();
    if (!name) return alert("Inserisci un nome!");

    const customEmoji = document.getElementById("customEmojiInput").value.trim();
    const [catName, defaultIcon] = document.getElementById("iconCategorySelect").value.split("|");
    const icon = customEmoji || defaultIcon;

    if (isEditingPlace && currentSelectedPlaceId) {
        places[currentSelectedPlaceId].name = name;
        places[currentSelectedPlaceId].icon = icon;
        places[currentSelectedPlaceId].category = catName;
        places[currentSelectedPlaceId].tags = document.getElementById("tagsInput").value.split(",");
        places[currentSelectedPlaceId].photo = document.getElementById("photoInput").value.trim();
        places[currentSelectedPlaceId].note = document.getElementById("noteInput").value || "Nessuna nota.";
        
        renderMarkers();
        saveState();
        document.getElementById("addModal").classList.remove("open");
        openPlace(currentSelectedPlaceId);
    } else {
        const id = `place-${Date.now()}`;
        places[id] = {
            name: name, icon: icon, category: catName,
            tags: document.getElementById("tagsInput").value.split(","),
            photo: document.getElementById("photoInput").value.trim(),
            note: document.getElementById("noteInput").value || "Nessuna nota.",
            lat: pendingCoords.lat, lng: pendingCoords.lng
        };

        renderMarkers();
        saveState();
        document.getElementById("addModal").classList.remove("open");
        openPlace(id);
    }
});

document.getElementById("addZoneOption").addEventListener("click", () => {
    document.getElementById("addMenu").classList.add("hidden");
    currentZonePoints = [];
    isDrawingZone = true;
    isEditingZone = false;
    document.getElementById("zoneCounterBadge").textContent = "Punti tracciati: 0";
    document.getElementById("confirmZone").setAttribute("disabled", "true");
    document.getElementById("zonePicker").classList.remove("hidden");
});

map.on('click', (e) => {
    if (isDrawingZone) {
        currentZonePoints.push([e.lngLat.lat, e.lngLat.lng]);
        document.getElementById("zoneCounterBadge").textContent = `Punti tracciati: ${currentZonePoints.length}`;
        if (currentZonePoints.length >= 3) {
            document.getElementById("confirmZone").removeAttribute("disabled");
        }
    }
});

document.getElementById("cancelZone").addEventListener("click", () => {
    isDrawingZone = false;
    document.getElementById("zonePicker").classList.add("hidden");
});

document.getElementById("confirmZone").addEventListener("click", () => {
    if (currentZonePoints.length < 3) return alert("Traccia almeno 3 punti sulla mappa!");
    isDrawingZone = false;
    document.getElementById("zonePicker").classList.add("hidden");
    document.getElementById("zoneNameInput").value = "";
    document.getElementById("zoneModal").classList.add("open");
});

document.getElementById("saveZoneName").addEventListener("click", () => {
    const name = document.getElementById("zoneNameInput").value.trim();
    if (!name) return alert("Inserisci un nome per la zona!");

    if (isEditingZone && currentSelectedZoneId) {
        zones[currentSelectedZoneId].name = name;
        renderZones();
        saveState();
        document.getElementById("zoneModal").classList.remove("open");
        openZoneSheet(currentSelectedZoneId);
    } else {
        const id = `zone-${Date.now()}`;
        zones[id] = { name: name, points: currentZonePoints };
        renderZones();
        saveState();
        document.getElementById("zoneModal").classList.remove("open");
    }
});

document.getElementById("openExportImgModal").addEventListener("click", () => {
    document.getElementById("profileModal").classList.remove("open");
    map.triggerRepaint();
    
    setTimeout(() => {
        const mapCanvas = map.getCanvas();
        const dataURL = mapCanvas.toDataURL("image/png");
        const exportCanvasEl = document.getElementById("exportMapCanvas");
        exportCanvasEl.style.backgroundImage = `url(${dataURL})`;

        document.getElementById("exportImgModal").classList.add("open");

        const legendList = document.getElementById("exportLegendList");
        legendList.innerHTML = "";
        Object.keys(places).forEach(id => {
            const p = places[id];
            const li = document.createElement('li');
            li.innerHTML = `<span>${p.icon}</span> <input type="text" value="${p.name}" style="background:transparent; border:none; color:white; font-size:11px; width:120px;">`;
            legendList.appendChild(li);
        });
    }, 300);

    document.getElementById("toggleNorth").onchange = (e) => {
        document.getElementById("geoNorthArrow").style.display = e.target.checked ? 'block' : 'none';
    };
    document.getElementById("toggleScale").onchange = (e) => {
        document.getElementById("geoScaleBar").style.display = e.target.checked ? 'flex' : 'none';
    };
    document.getElementById("toggleLegend").onchange = (e) => {
        document.getElementById("exportLegend").style.display = e.target.checked ? 'block' : 'none';
    };
});

document.getElementById("downloadImgBtn").addEventListener("click", () => {
    const previewWrapper = document.getElementById("exportPreviewContainer");
    html2canvas(previewWrapper, { scale: 2, useCORS: true, allowTaint: true }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'my-world-map.jpg';
        link.href = canvas.toDataURL('image/jpeg', 0.95);
        link.click();
    });
});

document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ places, zones, userProfile }));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "my_world_map_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
});

document.getElementById("closeSheet").addEventListener("click", () => placeSheet.classList.remove("open"));
document.getElementById("closeModal").addEventListener("click", () => document.getElementById("addModal").classList.remove("open"));
document.getElementById("styleButton").addEventListener("click", () => {
    loadStyleUI();
    document.getElementById("styleModal").classList.add("open");
});
document.getElementById("closeStyle").addEventListener("click", () => document.getElementById("styleModal").classList.remove("open"));
document.getElementById("profileNavBtn").addEventListener("click", () => { loadProfileUI(); document.getElementById("profileModal").classList.add("open"); });
document.getElementById("closeProfile").addEventListener("click", () => document.getElementById("profileModal").classList.remove("open"));
document.getElementById("closeZoneModal").addEventListener("click", () => document.getElementById("zoneModal").classList.remove("open"));
document.getElementById("closeExportModal").addEventListener("click", () => document.getElementById("exportImgModal").classList.remove("open"));

loadProfileUI();
