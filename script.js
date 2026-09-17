let userMapStyle = JSON.parse(localStorage.getItem('My World Map_mapStyle')) || { 
    iconStyle: 'classico', 
    colors: {
        nature: '#14532d',
        water: '#1e3a8a',
        building: '#1e293b',
        road: '#334155',
        railway: '#64748b'
    }
};

let userProfile = JSON.parse(localStorage.getItem('My World Map_user')) || { 
    name: "Utente", 
    avatar: "",
    mainCities: [],     
    visitedCities: []   
};

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/dark',
    center: [12.4964, 41.9028],
    zoom: 14,
    pitch: 0,
    bearing: 0,
    preserveDrawingBuffer: true
});

let currentBase64Photo = "";
let gpsMarker = null;
let tempSearchMarker = null;
let searchDebounceTimeout = null;
let macroCityMarkers = [];

map.on('load', () => {
    applyMapColors();
    enable3DBuildings();
    setupUnexploredAndBoundariesLayer();
    renderMarkers();
    updateMacroCityMarkers();
    updateBoundariesAndUnexploredLayer();
});

map.on('zoom', updateMacroCityMarkers);

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
                        'minzoom': 3,
                        'type': 'fill-extrusion',
                        'filter': layer.filter,
                        'paint': {
                            'fill-extrusion-color': paint['fill-color'] || userMapStyle.colors.building,
                            'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 3, 0, 14.5, ['get', 'render_height']],
                            'fill-extrusion-base': ['interpolate', ['linear'], ['zoom'], 3, 0, 14.5, ['get', 'render_min_height']],
                            'fill-extrusion-opacity': 0.95,
                            'fill-extrusion-vertical-gradient': true
                        }
                    }, labelLayerId);
                }
            }
        });
    } catch (e) { console.log(e); }
}

function applyMapColors() {
    const c = userMapStyle.colors;
    try {
        map.getStyle().layers.forEach(layer => {
            if (layer.type === 'background') map.setPaintProperty(layer.id, 'background-color', c.nature || '#14532d');
            if (layer.type === 'fill') {
                if (layer.id.includes('water')) map.setPaintProperty(layer.id, 'fill-color', c.water);
                else if (layer.id.match(/(park|garden|grass|forest|wood|nature|landcover|landuse)/)) map.setPaintProperty(layer.id, 'fill-color', c.nature || '#14532d');
                else if (layer.id.includes('building')) map.setPaintProperty(layer.id, 'fill-color', c.building);
            }
            if (map.getLayer(layer.id + '-3d')) map.setPaintProperty(layer.id + '-3d', 'fill-extrusion-color', c.building);
            if (layer.type === 'line') {
                if (layer.id.match(/(rail|train|transit)/)) map.setPaintProperty(layer.id, 'line-color', c.railway || '#64748b');
                else if (layer.id.match(/(road|highway|street)/)) map.setPaintProperty(layer.id, 'line-color', c.road);
            }
        });
    } catch (err) {}
}

function removeTempSearchMarker() {
    if (tempSearchMarker) { tempSearchMarker.remove(); tempSearchMarker = null; }
}

function toSexagesimal(dec, isLongitude) {
    const absDec = Math.abs(dec);
    const deg = Math.floor(absDec);
    const minFull = (absDec - deg) * 60;
    const min = Math.floor(minFull);
    const sec = ((minFull - min) * 60).toFixed(1);
    let direction = isLongitude ? (dec >= 0 ? "E" : "O") : (dec >= 0 ? "N" : "S");
    return `${deg}° ${min}′ ${sec}″ ${direction}`;
}

function setupUnexploredAndBoundariesLayer() {
    map.addSource('known-boundaries-src', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
    map.addLayer({ 'id': 'known-boundaries-layer', 'type': 'line', 'source': 'known-boundaries-src', 'paint': { 'line-color': '#00f0ff', 'line-width': 3, 'line-dasharray': [2, 2] } });

    map.addSource('unexplored-src', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
    map.addLayer({ 'id': 'unexplored-layer', 'type': 'fill', 'source': 'unexplored-src', 'paint': { 'fill-color': '#020617', 'fill-opacity': 0.65 } });
}

function updateBoundariesAndUnexploredLayer() {
    const allKnown = [...(userProfile.mainCities || []), ...(userProfile.visitedCities || [])];
    const boundaryFeatures = [];
    const knownPolygons = [];

    allKnown.forEach(c => {
        if (c.geojson) {
            boundaryFeatures.push({ type: 'Feature', geometry: c.geojson, properties: { name: c.name } });
            if (c.geojson.type === 'Polygon' || c.geojson.type === 'MultiPolygon') knownPolygons.push(c.geojson);
        }
    });

    if (map.getSource('known-boundaries-src')) map.getSource('known-boundaries-src').setData({ type: 'FeatureCollection', features: boundaryFeatures });
    if (map.getSource('unexplored-src')) {
        if (knownPolygons.length > 0) {
            const worldPolygon = [[[-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90]]];
            knownPolygons.forEach(g => {
                if (g.type === 'Polygon') worldPolygon.push(g.coordinates[0]);
                else if (g.type === 'MultiPolygon') g.coordinates.forEach(p => worldPolygon.push(p[0]));
            });
            map.getSource('unexplored-src').setData({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'Polygon', coordinates: worldPolygon } }] });
        } else {
            map.getSource('unexplored-src').setData({ type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'Polygon', coordinates: [[[-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90]]] } }] });
        }
    }
}

function updateMacroCityMarkers() {
    macroCityMarkers.forEach(m => m.remove());
    macroCityMarkers = [];
    if (map.getZoom() < 11) {
        (userProfile.mainCities || []).forEach(c => {
            const el = document.createElement('div'); el.className = 'macro-city-marker main'; el.innerHTML = `🏠 ${c.name}`;
            macroCityMarkers.push(new maplibregl.Marker({ element: el }).setLngLat([c.lng, c.lat]).addTo(map));
        });
        (userProfile.visitedCities || []).forEach(c => {
            const el = document.createElement('div'); el.className = 'macro-city-marker visited'; el.innerHTML = `✈️ ${c.name}`;
            macroCityMarkers.push(new maplibregl.Marker({ element: el }).setLngLat([c.lng, c.lat]).addTo(map));
        });
    }
}

// Immagini
const photoFileInput = document.getElementById('photoFileInput');
const imageDropZone = document.getElementById('imageDropZone');
const dropZoneContent = document.getElementById('dropZoneContent');
const imagePreviewWrapper = document.getElementById('imagePreviewWrapper');
const modalPhotoPreview = document.getElementById('modalPhotoPreview');
const removePhotoBtn = document.getElementById('removePhotoBtn');

['dragenter', 'dragover'].forEach(eventName => imageDropZone.addEventListener(eventName, (e) => { e.preventDefault(); imageDropZone.classList.add('dragover'); }, false));
['dragleave', 'drop'].forEach(eventName => imageDropZone.addEventListener(eventName, (e) => { e.preventDefault(); imageDropZone.classList.remove('dragover'); }, false));
imageDropZone.addEventListener('drop', (e) => { if (e.dataTransfer.files.length > 0) handleImageFile(e.dataTransfer.files[0]); });
photoFileInput.addEventListener('change', (e) => { if (e.target.files.length > 0) handleImageFile(e.target.files[0]); });

function handleImageFile(file) {
    if (!file.type.startsWith('image/')) return alert('Seleziona un file immagine valido.');
    const reader = new FileReader();
    reader.onload = (e) => {
        currentBase64Photo = e.target.result;
        modalPhotoPreview.src = currentBase64Photo;
        dropZoneContent.classList.add('hidden');
        imagePreviewWrapper.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

removePhotoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentBase64Photo = "";
    photoFileInput.value = "";
    modalPhotoPreview.src = "";
    dropZoneContent.classList.remove('hidden');
    imagePreviewWrapper.classList.add('hidden');
});

// Search Map
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    clearTimeout(searchDebounceTimeout);
    if (query.length < 3) return searchSuggestions.classList.add("hidden");

    searchDebounceTimeout = setTimeout(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`)
            .then(res => res.json())
            .then(data => {
                searchSuggestions.innerHTML = "";
                if (data && data.length > 0) {
                    data.forEach(item => {
                        const div = document.createElement("div"); div.className = "suggestion-item"; div.textContent = item.display_name;
                        div.addEventListener("click", () => selectSearchResult(item));
                        searchSuggestions.appendChild(div);
                    });
                    searchSuggestions.classList.remove("hidden");
                } else searchSuggestions.classList.add("hidden");
            }).catch(() => searchSuggestions.classList.add("hidden"));
    }, 300);
});

function selectSearchResult(item) {
    const lat = parseFloat(item.lat), lon = parseFloat(item.lon);
    searchSuggestions.classList.add("hidden");
    searchInput.value = item.display_name.split(",")[0];
    removeTempSearchMarker();
    map.flyTo({ center: [lon, lat], zoom: 17, pitch: 0 });

    const el = document.createElement('div'); el.className = 'temp-search-marker';
    const inner = document.createElement('div'); inner.className = 'temp-pin-inner'; inner.innerHTML = '📍';
    el.appendChild(inner);
    tempSearchMarker = new maplibregl.Marker({ element: el, anchor: 'bottom' }).setLngLat([lon, lat]).addTo(map);
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) searchSuggestions.classList.add("hidden");
    if (!e.target.closest(".city-search-box")) {
        document.getElementById("mainCitySuggestions").classList.add("hidden");
        document.getElementById("visitedCitySuggestions").classList.add("hidden");
    }
});

// Profile Cities Search
function setupCityAutocomplete(inputId, suggestionsId, isMain) {
    const inp = document.getElementById(inputId), sug = document.getElementById(suggestionsId);
    let timeout = null;

    inp.addEventListener("input", function() {
        const query = this.value.trim();
        clearTimeout(timeout);
        if (query.length < 2) return sug.classList.add("hidden");

        timeout = setTimeout(() => {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`)
                .then(res => res.json())
                .then(data => {
                    sug.innerHTML = "";
                    if (data && data.length > 0) {
                        data.forEach(item => {
                            const div = document.createElement("div"); div.className = "suggestion-item"; div.textContent = item.display_name;
                            div.addEventListener("click", () => {
                                addCityToProfileWithPolygon(item, isMain);
                                inp.value = ""; sug.classList.add("hidden");
                            });
                            sug.appendChild(div);
                        });
                        sug.classList.remove("hidden");
                    } else sug.classList.add("hidden");
                });
        }, 300);
    });
}

function addCityToProfileWithPolygon(item, isMain) {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&q=${encodeURIComponent(item.display_name)}&limit=1`)
        .then(res => res.json())
        .then(data => {
            let geojson = null;
            let boundingbox = item.boundingbox;
            if (data && data.length > 0 && data[0].geojson) {
                geojson = data[0].geojson;
                boundingbox = data[0].boundingbox;
            }
            const cityObj = { 
                name: item.display_name.split(",")[0], 
                fullName: item.display_name,
                lat: parseFloat(item.lat), 
                lng: parseFloat(item.lon), 
                geojson: geojson, 
                boundingbox: boundingbox 
            };
            if (isMain) {
                if (!userProfile.mainCities) userProfile.mainCities = [];
                if (userProfile.mainCities.length >= 2) return alert("Puoi impostare al massimo 2 città principali!");
                userProfile.mainCities.push(cityObj);
            } else {
                if (!userProfile.visitedCities) userProfile.visitedCities = [];
                userProfile.visitedCities.push(cityObj);
            }
            saveState(); 
            renderProfileCityChips(); 
            updateMacroCityMarkers(); 
            updateBoundariesAndUnexploredLayer();
        }).catch(() => {
            const cityObj = { name: item.display_name.split(",")[0], fullName: item.display_name, lat: parseFloat(item.lat), lng: parseFloat(item.lon), geojson: null, boundingbox: item.boundingbox };
            if (isMain) {
                if (!userProfile.mainCities) userProfile.mainCities = [];
                if (userProfile.mainCities.length >= 2) return alert("Puoi impostare al massimo 2 città principali!");
                userProfile.mainCities.push(cityObj);
            } else {
                if (!userProfile.visitedCities) userProfile.visitedCities = [];
                userProfile.visitedCities.push(cityObj);
            }
            saveState(); renderProfileCityChips(); updateMacroCityMarkers(); updateBoundariesAndUnexploredLayer();
        });
}

function renderProfileCityChips() {
    const mainList = document.getElementById("mainCitiesList"), visitedList = document.getElementById("visitedCitiesList");
    mainList.innerHTML = "";
    (userProfile.mainCities || []).forEach((c, idx) => {
        const chip = document.createElement("div"); chip.className = "city-chip main-chip"; chip.innerHTML = `🏠 ${c.name} <span class="btn-remove-chip">✕</span>`;
        chip.querySelector(".btn-remove-chip").addEventListener("click", () => { userProfile.mainCities.splice(idx, 1); saveState(); renderProfileCityChips(); updateMacroCityMarkers(); updateBoundariesAndUnexploredLayer(); });
        mainList.appendChild(chip);
    });
    visitedList.innerHTML = "";
    (userProfile.visitedCities || []).forEach((c, idx) => {
        const chip = document.createElement("div"); chip.className = "city-chip"; chip.innerHTML = `✈️ ${c.name} <span class="btn-remove-chip">✕</span>`;
        chip.querySelector(".btn-remove-chip").addEventListener("click", () => { userProfile.visitedCities.splice(idx, 1); saveState(); renderProfileCityChips(); updateMacroCityMarkers(); updateBoundariesAndUnexploredLayer(); });
        visitedList.appendChild(chip);
    });
}
setupCityAutocomplete("mainCitySearchInput", "mainCitySuggestions", true);
setupCityAutocomplete("visitedCitySearchInput", "visitedCitySuggestions", false);

// UI Styles
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
    localStorage.setItem('My World Map_mapStyle', JSON.stringify(userMapStyle));
    applyMapColors(); renderMarkers(); document.getElementById('styleModal').classList.remove('open');
});

let places = JSON.parse(localStorage.getItem('My World Map_places')) || { "p1": { name: "Casa Mia", icon: "🏠", category: "Casa", tags: ["casa"], note: "Abitazione principale.", photo: "", lat: 41.9028, lng: 12.4964 } };
let activeMarkers = [], currentSelectedPlaceId = null, pendingCoords = null, isEditingPlace = false;

function saveState() {
    localStorage.setItem('My World Map_places', JSON.stringify(places));
    localStorage.setItem('My World Map_user', JSON.stringify(userProfile));
    updateProfileStats();
}

function createMarkerElement(item) {
    const el = document.createElement('div');
    el.className = 'custom-pin-wrapper';
    
    if (userMapStyle.iconStyle === 'neon') {
        el.innerHTML = `<div class="pin-neon"><span>${item.icon}</span></div>`;
    } else if (userMapStyle.iconStyle === 'vintage') {
        el.innerHTML = `<div class="pin-vintage"><span>${item.icon}</span></div>`;
    } else if (userMapStyle.iconStyle === 'cyberpunk') {
        el.innerHTML = `<div class="pin-cyberpunk"><span>${item.icon}</span></div>`;
    } else {
        el.innerHTML = `<div class="pin-classico"><span>${item.icon}</span></div>`;
    }
    return el;
}

function renderMarkers() {
    activeMarkers.forEach(m => m.remove()); activeMarkers = [];
    Object.keys(places).forEach(id => {
        const item = places[id];
        const el = createMarkerElement(item);
        el.addEventListener('click', (e) => { e.stopPropagation(); removeTempSearchMarker(); openPlace(id); });
        activeMarkers.push(new maplibregl.Marker({ element: el }).setLngLat([item.lng, item.lat]).addTo(map));
    });
}

function loadProfileUI() {
    document.getElementById('profileNameInput').value = userProfile.name || "";
    const imgEl = document.getElementById("profileAvatarImg");
    const placeholderEl = document.getElementById("avatarPlaceholder");
    if (userProfile.avatar) { imgEl.src = userProfile.avatar; imgEl.classList.remove("hidden"); placeholderEl.classList.add("hidden"); } 
    else { imgEl.classList.add("hidden"); placeholderEl.classList.remove("hidden"); }
    renderProfileCityChips(); 
    updateProfileStats();
}

function updateProfileStats() { 
    const totalPins = Object.keys(places).length;
    const countEl = document.getElementById("totalPinsCount");
    if (countEl) countEl.textContent = totalPins;

    const allCities = [...(userProfile.mainCities || []), ...(userProfile.visitedCities || [])];
    const uniqueCitiesCount = allCities.length;

    const countriesSet = new Set();
    allCities.forEach(c => {
        if (c.fullName) {
            const parts = c.fullName.split(',');
            countriesSet.add(parts[parts.length - 1].trim());
        }
    });
    const uniqueCountriesCount = countriesSet.size;

    let airportsCount = 0;
    Object.values(places).forEach(p => {
        if (p.icon === "✈️" || (p.category && p.category.toLowerCase().includes("aeroporto"))) {
            airportsCount++;
        }
    });

    const mainCitiesCount = (userProfile.mainCities || []).length;
    let polygonCount = allCities.filter(c => c.geojson).length;
    let explorationPercent = Math.min(100, (polygonCount * 2.5 + uniqueCitiesCount * 1.5)).toFixed(1);

    const statsContainer = document.getElementById("advancedStatsContainer");
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9rem; margin-top: 15px; background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px;">
                <div>🏙️ Città esplorate: <b>${uniqueCitiesCount}</b></div>
                <div>🌍 Paesi esplorati: <b>${uniqueCountriesCount}</b></div>
                <div>📍 Luoghi segnati: <b>${totalPins}</b></div>
                <div>🏠 Città principali: <b>${mainCitiesCount}</b></div>
                <div>✈️ Aeroporti usati: <b>${airportsCount}</b></div>
                <div>🗺️ Territorio: <b>${explorationPercent}%</b></div>
            </div>
        `;
    }
}

const profileAvatarFileInput = document.getElementById('profileAvatarFileInput');
if (profileAvatarFileInput) {
    profileAvatarFileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            if (!file.type.startsWith('image/')) return alert('Seleziona un file immagine.');
            const reader = new FileReader();
            reader.onload = (evt) => {
                userProfile.avatar = evt.target.result;
                document.getElementById("profileAvatarImg").src = userProfile.avatar;
                document.getElementById("profileAvatarImg").classList.remove("hidden");
                document.getElementById("avatarPlaceholder").classList.add("hidden");
            };
            reader.readAsDataURL(file);
        }
    });
}

document.getElementById("saveProfileAvatar").addEventListener("click", () => {
    userProfile.name = document.getElementById("profileNameInput").value.trim() || "Utente";
    saveState(); loadProfileUI(); alert("Profilo aggiornato!");
});

const placeSheet = document.getElementById("placeSheet");

function openPlace(id) {
    currentSelectedPlaceId = id; const place = places[id]; if (!place) return;
    document.getElementById("placeIcon").textContent = place.icon;
    document.getElementById("placeName").textContent = place.name;
    document.getElementById("placeCategory").textContent = `${place.icon} ${place.category}`;
    document.getElementById("placeNote").textContent = place.note;

    let coordsEl = document.getElementById("placeCoords");
    if (!coordsEl) {
        coordsEl = document.createElement("div"); coordsEl.id = "placeCoords";
        coordsEl.style.fontSize = "0.85rem"; coordsEl.style.opacity = "0.75"; coordsEl.style.marginTop = "6px"; coordsEl.style.color = "#38bdf8";
        document.getElementById("placeCategory").insertAdjacentElement("afterend", coordsEl);
    }
    coordsEl.innerHTML = `📍 ${toSexagesimal(place.lat, false)}, ${toSexagesimal(place.lng, true)}`;

    const airportFlyContainer = document.getElementById("airportFlyContainer");
    const airportSelect = document.getElementById("airportDestinationSelect");
    if (place.icon === "✈️" || place.category.toLowerCase().includes("aeroporto")) {
        airportSelect.innerHTML = '<option value="">Seleziona destinazione...</option>';
        let otherAirportsFound = false;
        Object.keys(places).forEach(otherId => {
            if (otherId !== id) {
                const otherPlace = places[otherId];
                if (otherPlace.icon === "✈️" || otherPlace.category.toLowerCase().includes("aeroporto")) {
                    otherAirportsFound = true;
                    const opt = document.createElement("option"); opt.value = otherId; opt.textContent = `✈️ ${otherPlace.name}`;
                    airportSelect.appendChild(opt);
                }
            }
        });
        if (otherAirportsFound) airportFlyContainer.classList.remove("hidden");
        else airportFlyContainer.classList.add("hidden");
    } else airportFlyContainer.classList.add("hidden");

    const imgContainer = document.getElementById("placeImageContainer");
    if (place.photo) { document.getElementById("placeImage").src = place.photo; imgContainer.classList.remove("hidden"); } 
    else imgContainer.classList.add("hidden");

    const tagsContainer = document.getElementById("placeTags"); tagsContainer.innerHTML = "";
    (place.tags || []).forEach(t => { if(t && t.trim()) { const span = document.createElement("span"); span.textContent = `#${t.trim()} `; tagsContainer.appendChild(span); } });
    placeSheet.classList.add("open");
}

document.getElementById("flyToAirportBtn").addEventListener("click", () => {
    const destId = document.getElementById("airportDestinationSelect").value;
    if (!destId) return alert("Seleziona un aeroporto di destinazione!");
    const destPlace = places[destId];
    if (destPlace) {
        placeSheet.classList.remove("open");
        map.flyTo({ center: [destPlace.lng, destPlace.lat], zoom: 15, pitch: 30, speed: 1.2, curve: 1.4 });
        setTimeout(() => openPlace(destId), 2000);
    }
});

document.getElementById("deletePlaceBtn").addEventListener("click", () => {
    if (currentSelectedPlaceId && confirm("Eliminare questo pin?")) { delete places[currentSelectedPlaceId]; saveState(); placeSheet.classList.remove("open"); renderMarkers(); }
});

document.getElementById("editPlaceBtn").addEventListener("click", () => {
    const place = places[currentSelectedPlaceId]; if (!place) return;
    isEditingPlace = true;
    document.getElementById("modalTitle").textContent = "Modifica Pin";
    document.getElementById("placeInput").value = place.name;
    document.getElementById("customEmojiInput").value = place.icon;
    document.getElementById("tagsInput").value = (place.tags || []).join(",");
    document.getElementById("noteInput").value = place.note || "";
    
    if (place.photo) {
        currentBase64Photo = place.photo; modalPhotoPreview.src = place.photo;
        dropZoneContent.classList.add('hidden'); imagePreviewWrapper.classList.remove('hidden');
    } else removePhotoBtn.click();

    placeSheet.classList.remove("open"); document.getElementById("addModal").classList.add("open");
});

document.getElementById("gpsButton").addEventListener("click", () => {
    if (!navigator.geolocation) return alert("Geolocalizzazione non supportata.");
    navigator.geolocation.getCurrentPosition(pos => {
        const lng = pos.coords.longitude, lat = pos.coords.latitude;
        removeTempSearchMarker();
        map.flyTo({ center: [lng, lat], zoom: 16, pitch: 0 });
        if (gpsMarker) gpsMarker.remove();
        const el = document.createElement('div'); el.className = 'gps-marker-dot';
        gpsMarker = new maplibregl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map);
    }, err => alert(`Errore GPS: ${err.message}`), { enableHighAccuracy: true, timeout: 10000 });
});

document.getElementById("addOptionButton").addEventListener("click", () => document.getElementById("mapPicker").classList.remove("hidden"));
document.getElementById("cancelPick").addEventListener("click", () => { document.getElementById("mapPicker").classList.add("hidden"); removeTempSearchMarker(); });

document.getElementById("confirmPick").addEventListener("click", () => {
    const center = map.getCenter(); pendingCoords = { lat: center.lat, lng: center.lng }; isEditingPlace = false;
    document.getElementById("modalTitle").textContent = "Nuovo Pin";
    document.getElementById("placeInput").value = ""; document.getElementById("customEmojiInput").value = "";
    document.getElementById("tagsInput").value = ""; document.getElementById("noteInput").value = ""; removePhotoBtn.click();
    document.getElementById("mapPicker").classList.add("hidden"); document.getElementById("addModal").classList.add("open");
});

document.getElementById("savePlace").addEventListener("click", () => {
    const name = document.getElementById("placeInput").value.trim(); if (!name) return alert("Inserisci un nome!");
    const customEmoji = document.getElementById("customEmojiInput").value.trim();
    const [catName, defaultIcon] = document.getElementById("iconCategorySelect").value.split("|");
    const icon = customEmoji || defaultIcon;
    removeTempSearchMarker();

    if (isEditingPlace && currentSelectedPlaceId) {
        places[currentSelectedPlaceId].name = name; places[currentSelectedPlaceId].icon = icon;
        places[currentSelectedPlaceId].category = catName; places[currentSelectedPlaceId].tags = document.getElementById("tagsInput").value.split(",");
        places[currentSelectedPlaceId].photo = currentBase64Photo; places[currentSelectedPlaceId].note = document.getElementById("noteInput").value || "Nessuna nota.";
        renderMarkers(); saveState(); document.getElementById("addModal").classList.remove("open"); openPlace(currentSelectedPlaceId);
    } else {
        const id = `place-${Date.now()}`;
        places[id] = { name: name, icon: icon, category: catName, tags: document.getElementById("tagsInput").value.split(","), photo: currentBase64Photo, note: document.getElementById("noteInput").value || "Nessuna nota.", lat: pendingCoords.lat, lng: pendingCoords.lng };
        renderMarkers(); saveState(); document.getElementById("addModal").classList.remove("open"); openPlace(id);
    }
});

document.getElementById("closeModal").addEventListener("click", () => { document.getElementById("addModal").classList.remove("open"); removeTempSearchMarker(); });

document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ places, userProfile }));
    const a = document.createElement('a'); a.setAttribute("href", dataStr); a.setAttribute("download", "my_world_map_backup.json");
    document.body.appendChild(a); a.click(); a.remove();
});

// Gestione Modale Guida (Help)
document.getElementById("helpButton").addEventListener("click", () => document.getElementById("helpModal").classList.add("open"));
document.getElementById("closeHelp").addEventListener("click", () => document.getElementById("helpModal").classList.remove("open"));

document.getElementById("closeSheet").addEventListener("click", () => placeSheet.classList.remove("open"));
document.getElementById("styleButton").addEventListener("click", () => { loadStyleUI(); document.getElementById("styleModal").classList.add("open"); });
document.getElementById("closeStyle").addEventListener("click", () => document.getElementById("styleModal").classList.remove("open"));

// Gestione Profilo
document.getElementById("profileNavBtn").addEventListener("click", (e) => { 
    e.stopPropagation(); 
    loadProfileUI(); 
    document.getElementById("profileModal").classList.add("open"); 
});

document.getElementById("closeProfile").addEventListener("click", () => {
    document.getElementById("profileModal").classList.remove("open");
});
