let userMapStyle = JSON.parse(localStorage.getItem('cartoQuest_mapStyle')) || { 
    iconStyle: 'classico', 
    colors: {
        nature: '#14532d',
        water: '#1e3a8a',
        building: '#1e293b',
        road: '#334155',
        railway: '#64748b'
    }
};

let userProfile = JSON.parse(localStorage.getItem('cartoQuest_user')) || { name: "Utente", avatar: "" };

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/dark',
    center: [12.4964, 41.9028],
    zoom: 14,
    pitch: 0,
    bearing: 0,
    preserveDrawingBuffer: true
});

let gpsMarker = null;
let tempSearchMarker = null;
let searchDebounceTimeout = null;

map.on('load', () => {
    applyMapColors();
    enable3DBuildings();
    renderMarkers();
});

function enable3DBuildings() {
    try {
        const layers = map.getStyle().layers;
        let labelLayerId;
        for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout && layers[i].layout['text-field']) {
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
                        'minzoom': 12.5,
                        'type': 'fill-extrusion',
                        'filter': layer.filter,
                        'paint': {
                            'fill-extrusion-color': paint['fill-color'] || userMapStyle.colors.building,
                            'fill-extrusion-height': [
                                'interpolate', ['linear'], ['zoom'],
                                12.5, 0,
                                14.5, ['get', 'render_height']
                            ],
                            'fill-extrusion-base': [
                                'interpolate', ['linear'], ['zoom'],
                                12.5, 0,
                                14.5, ['get', 'render_min_height']
                            ],
                            'fill-extrusion-opacity': 0.95,
                            'fill-extrusion-vertical-gradient': true
                        }
                    }, labelLayerId);
                }
            }
        });
    } catch (e) {
        console.log("3D Config finito", e);
    }
}

function applyMapColors() {
    const c = userMapStyle.colors;
    try {
        const layers = map.getStyle().layers;
        layers.forEach(layer => {
            if (layer.type === 'background') {
                map.setPaintProperty(layer.id, 'background-color', c.nature || '#14532d');
            }

            if (layer.type === 'fill') {
                if (layer.id.includes('water')) {
                    map.setPaintProperty(layer.id, 'fill-color', c.water);
                } 
                else if (
                    layer.id.includes('park') || 
                    layer.id.includes('garden') || 
                    layer.id.includes('grass') || 
                    layer.id.includes('forest') || 
                    layer.id.includes('wood') || 
                    layer.id.includes('nature') ||
                    layer.id.includes('landcover') ||
                    layer.id.includes('landuse')
                ) {
                    map.setPaintProperty(layer.id, 'fill-color', c.nature || '#14532d');
                }
                else if (layer.id.includes('building')) {
                    map.setPaintProperty(layer.id, 'fill-color', c.building);
                }
            }

            if (map.getLayer(layer.id + '-3d')) {
                map.setPaintProperty(layer.id + '-3d', 'fill-extrusion-color', c.building);
            }

            if (layer.type === 'line') {
                if (layer.id.includes('rail') || layer.id.includes('train') || layer.id.includes('transit')) {
                    map.setPaintProperty(layer.id, 'line-color', c.railway || '#64748b');
                } else if (layer.id.includes('road') || layer.id.includes('highway') || layer.id.includes('street')) {
                    map.setPaintProperty(layer.id, 'line-color', c.road);
                }
            }
        });
    } catch (err) {
        console.log("Aggiornamento colori in corso...", err);
    }
}

function removeTempSearchMarker() {
    if (tempSearchMarker) {
        tempSearchMarker.remove();
        tempSearchMarker = null;
    }
}

// Search
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");

searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    clearTimeout(searchDebounceTimeout);

    if (query.length < 3) {
        searchSuggestions.innerHTML = "";
        searchSuggestions.classList.add("hidden");
        return;
    }

    searchDebounceTimeout = setTimeout(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`)
            .then(res => res.json())
            .then(data => {
                searchSuggestions.innerHTML = "";
                if (data && data.length > 0) {
                    data.forEach(item => {
                        const div = document.createElement("div");
                        div.className = "suggestion-item";
                        div.textContent = item.display_name;
                        div.addEventListener("click", () => selectSearchResult(item));
                        searchSuggestions.appendChild(div);
                    });
                    searchSuggestions.classList.remove("hidden");
                } else {
                    searchSuggestions.classList.add("hidden");
                }
            })
            .catch(() => searchSuggestions.classList.add("hidden"));
    }, 300);
});

function selectSearchResult(item) {
    const lat = parseFloat(item.lat);
    const lon = parseFloat(item.lon);

    searchSuggestions.classList.add("hidden");
    searchInput.value = item.display_name.split(",")[0];

    removeTempSearchMarker();

    map.flyTo({ center: [lon, lat], zoom: 17, pitch: 0 });

    const el = document.createElement('div');
    el.className = 'temp-search-marker';
    const inner = document.createElement('div');
    inner.className = 'temp-pin-inner';
    inner.innerHTML = '📍';
    el.appendChild(inner);

    tempSearchMarker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat([lon, lat])
        .addTo(map);
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) searchSuggestions.classList.add("hidden");
});

function loadStyleUI() {
    document.getElementById('colorNature').value = userMapStyle.colors.nature || '#14532d';
    document.getElementById('colorWater').value = userMapStyle.colors.water;
    document.getElementById('colorBuilding').value = userMapStyle.colors.building;
    document.getElementById('colorRoad').value = userMapStyle.colors.road;
    document.getElementById('colorRailway').value = userMapStyle.colors.railway || '#64748b';
    document.getElementById('iconStyleSelect').value = userMapStyle.iconStyle;
}

document.getElementById('applyStyle').addEventListener('click', () => {
    userMapStyle.colors.nature = document.getElementById('colorNature').value;
    userMapStyle.colors.water = document.getElementById('colorWater').value;
    userMapStyle.colors.building = document.getElementById('colorBuilding').value;
    userMapStyle.colors.road = document.getElementById('colorRoad').value;
    userMapStyle.colors.railway = document.getElementById('colorRailway').value;
    userMapStyle.iconStyle = document.getElementById('iconStyleSelect').value;

    localStorage.setItem('cartoQuest_mapStyle', JSON.stringify(userMapStyle));
    applyMapColors();
    renderMarkers();
    document.getElementById('styleModal').classList.remove('open');
});

let places = JSON.parse(localStorage.getItem('cartoQuest_places')) || {
    "p1": { name: "Casa Mia", icon: "🏠", category: "Casa Principale", tags: ["casa"], note: "Abitazione principale.", photo: "", lat: 41.9028, lng: 12.4964 }
};

let activeMarkers = [];
let currentSelectedPlaceId = null;
let pendingCoords = null;
let isEditingPlace = false;

function saveState() {
    localStorage.setItem('cartoQuest_places', JSON.stringify(places));
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
            removeTempSearchMarker();
            openPlace(id);
        });

        const marker = new maplibregl.Marker({ element: el })
            .setLngLat([item.lng, item.lat])
            .addTo(map);

        activeMarkers.push(marker);
    });
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

document.getElementById("gpsButton").addEventListener("click", () => {
    if (!navigator.geolocation) return alert("Geolocalizzazione non supportata.");

    navigator.geolocation.getCurrentPosition(pos => {
        const lng = pos.coords.longitude;
        const lat = pos.coords.latitude;

        removeTempSearchMarker();
        map.flyTo({ center: [lng, lat], zoom: 16, pitch: 0 });

        if (gpsMarker) gpsMarker.remove();
        const el = document.createElement('div');
        el.className = 'gps-marker-dot';
        gpsMarker = new maplibregl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map);
    }, err => alert(`Errore GPS: ${err.message}`), { enableHighAccuracy: true, timeout: 10000 });
});

document.getElementById("addOptionButton").addEventListener("click", () => document.getElementById("mapPicker").classList.remove("hidden"));
document.getElementById("cancelPick").addEventListener("click", () => {
    document.getElementById("mapPicker").classList.add("hidden");
    removeTempSearchMarker();
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

    removeTempSearchMarker();

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

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("addModal").classList.remove("open");
    removeTempSearchMarker();
});

// Slider Dimensioni
document.getElementById("sizeNorthArrow").addEventListener("input", (e) => {
    document.getElementById("geoNorthArrow").style.transform = `scale(${e.target.value})`;
});

document.getElementById("sizeScaleBar").addEventListener("input", (e) => {
    document.getElementById("geoScaleBar").style.transform = `scale(${e.target.value})`;
});

document.getElementById("sizeLegend").addEventListener("input", (e) => {
    document.getElementById("exportLegend").style.transform = `scale(${e.target.value})`;
});

// Gestione Cambio Formato Anteprima (1:1, 16:9, 4:3, 3:4)
document.getElementById("exportFormatSelect").addEventListener("change", (e) => {
    const wrapper = document.getElementById("exportPreviewContainer");
    wrapper.className = "export-preview-wrapper";
    const val = e.target.value;
    if (val === "1/1") wrapper.classList.add("ratio-1-1");
    else if (val === "16/9") wrapper.classList.add("ratio-16-9");
    else if (val === "4/3") wrapper.classList.add("ratio-4-3");
    else if (val === "3/4") wrapper.classList.add("ratio-3-4");
    
    // Ricalcola la scala e i confini dopo il cambio di formato
    setTimeout(updateMapScaleText, 100);
});

// Funzione di Calcolo Dinamico della Scala Grafica della Mappa
function updateMapScaleText() {
    const y = map.getCanvas().clientHeight / 2;
    const center = map.getCenter();
    
    // Calcolo distanza reale per pixel in metri
    const point1 = map.unproject([0, y]);
    const point2 = map.unproject([100, y]);
    
    const rad = Math.PI / 180;
    const lat1 = point1.lat * rad;
    const lat2 = point2.lat * rad;
    const a = Math.sin((point2.lat - point1.lat) * rad / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin((point2.lng - point1.lng) * rad / 2) ** 2;
    const distMeters = 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let labelText = "100 m";
    if (distMeters >= 1000) {
        labelText = `${(distMeters / 1000).toFixed(1)} km`;
    } else {
        labelText = `${Math.round(distMeters)} m`;
    }

    document.getElementById("scaleLabelText").textContent = labelText;
}

// Gestione Modale Esportazione Mappa
document.getElementById("legendTitleInput").addEventListener("input", (e) => {
    document.getElementById("legendTitleDisplay").textContent = e.target.value || "Legenda";
});

document.getElementById("openExportImgModal").addEventListener("click", () => {
    document.getElementById("profileModal").classList.remove("open");
    
    map.resize();
    map.triggerRepaint();
    
    setTimeout(() => {
        const mapCanvas = map.getCanvas();
        const dataURL = mapCanvas.toDataURL("image/png");
        const exportCanvasEl = document.getElementById("exportMapCanvas");
        
        exportCanvasEl.style.backgroundImage = `url(${dataURL})`;
        exportCanvasEl.style.backgroundSize = 'cover';
        exportCanvasEl.style.backgroundPosition = 'center';

        document.getElementById("exportImgModal").classList.add("open");

        // Aggiorna la scala grafica dinamica
        updateMapScaleText();

        const legendList = document.getElementById("exportLegendList");
        legendList.innerHTML = "";
        Object.keys(places).forEach(id => {
            const p = places[id];
            const li = document.createElement('li');
            li.innerHTML = `<span>${p.icon}</span> <input type="text" value="${p.name}" style="background:transparent; border:none; color:white; font-size:11px; width:110px;">`;
            legendList.appendChild(li);
        });

        initDraggableElements();
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

// TRASCINAMENTO (DRAG & DROP) SOLIDO
let activeDraggableEl = null;
let dragStartX = 0;
let dragStartY = 0;
let initialElLeft = 0;
let initialElTop = 0;

function initDraggableElements() {
    const draggables = document.querySelectorAll('.draggable-element');
    const container = document.getElementById('exportPreviewContainer');

    draggables.forEach(el => {
        const rect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const left = rect.left - containerRect.left;
        const top = rect.top - containerRect.top;

        el.style.right = 'auto';
        el.style.bottom = 'auto';
        el.style.left = `${left}px`;
        el.style.top = `${top}px`;

        const startDrag = (e) => {
            activeDraggableEl = el;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            dragStartX = clientX;
            dragStartY = clientY;

            initialElLeft = parseFloat(el.style.left) || 0;
            initialElTop = parseFloat(el.style.top) || 0;

            e.stopPropagation();
        };

        el.onmousedown = startDrag;
        el.ontouchstart = startDrag;
    });
}

const handleMove = (e) => {
    if (!activeDraggableEl) return;

    if (e.cancelable) e.preventDefault();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const dx = clientX - dragStartX;
    const dy = clientY - dragStartY;

    const container = document.getElementById('exportPreviewContainer');
    const containerRect = container.getBoundingClientRect();
    const elRect = activeDraggableEl.getBoundingClientRect();

    let newLeft = initialElLeft + dx;
    let newTop = initialElTop + dy;

    const maxLeft = containerRect.width - elRect.width;
    const maxTop = containerRect.height - elRect.height;

    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(0, Math.min(newTop, maxTop));

    activeDraggableEl.style.left = `${newLeft}px`;
    activeDraggableEl.style.top = `${newTop}px`;
};

const handleEnd = () => { activeDraggableEl = null; };

window.addEventListener('mousemove', handleMove);
window.addEventListener('touchmove', handleMove, { passive: false });
window.addEventListener('mouseup', handleEnd);
window.addEventListener('touchend', handleEnd);

document.getElementById("downloadImgBtn").addEventListener("click", () => {
    const previewWrapper = document.getElementById("exportPreviewContainer");
    const downloadBtn = document.getElementById("downloadImgBtn");
    
    downloadBtn.textContent = "⌛ Generazione HD...";
    downloadBtn.disabled = true;

    // Configurazione avanzata per html2canvas ad altissima risoluzione
    html2canvas(previewWrapper, {
        scale: 3, // Aumenta la risoluzione (3x = qualità da stampa/HD)
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        onclone: (clonedDoc) => {
            // Disattiva filtri di sfocatura nel clone prima di scattare la foto
            const clonedElements = clonedDoc.querySelectorAll('.export-element');
            clonedElements.forEach(el => {
                el.style.backdropFilter = 'none';
                el.style.webkitBackdropFilter = 'none';
            });
            
            // Assicura che tutti gli input testo mostrino correttamente il valore digitato
            const inputs = clonedDoc.querySelectorAll('.custom-legend li input');
            inputs.forEach(input => {
                const parent = input.parentElement;
                const textSpan = clonedDoc.createElement('span');
                textSpan.textContent = input.value;
                textSpan.style.color = '#ffffff';
                textSpan.style.fontSize = '12px';
                textSpan.style.fontWeight = '500';
                input.replaceWith(textSpan);
            });
        }
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `world-map-${Date.now()}.jpg`;
        link.href = canvas.toDataURL('image/jpeg', 0.98); // Qualità JPEG al 98%
        link.click();
        
        downloadBtn.textContent = "📥 Scarica JPEG";
        downloadBtn.disabled = false;
    }).catch(err => {
        console.error("Errore esportazione:", err);
        alert("Errore durante la generazione dell'immagine.");
        downloadBtn.textContent = "📥 Scarica JPEG";
        downloadBtn.disabled = false;
    });
});

document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ places, userProfile }));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "my_world_map_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
});

document.getElementById("closeSheet").addEventListener("click", () => placeSheet.classList.remove("open"));
document.getElementById("styleButton").addEventListener("click", () => {
    loadStyleUI();
    document.getElementById("styleModal").classList.add("open");
});
document.getElementById("closeStyle").addEventListener("click", () => document.getElementById("styleModal").classList.remove("open"));
document.getElementById("profileNavBtn").addEventListener("click", () => { loadProfileUI(); document.getElementById("profileModal").classList.add("open"); });
document.getElementById("closeProfile").addEventListener("click", () => document.getElementById("profileModal").classList.remove("open"));
document.getElementById("closeExportModal").addEventListener("click", () => document.getElementById("exportImgModal").classList.remove("open"));

loadProfileUI();
