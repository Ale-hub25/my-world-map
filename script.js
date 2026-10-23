// ==========================================
// DIZIONARIO TRADUZIONI TOTALI (IT / EN)
// ==========================================
const translations = {
    it: {
        searchPlaceholder: "🔍 Cerca città o luogo...",
        filterTitle: "🏷️ Filtra Categoria ▾",
        catAll: "Tutti i Pin", catFav: "⭐ Preferiti", catHome: "🏠 Casa", catWork: "💼 Lavoro / Ufficio",
        catAirports: "✈️ Aeroporti / Viaggi", catFood: "🍽️ Ristoranti & Cibo", catCoffee: "☕ Bar & Caffè",
        catNature: "🌲 Natura & Parchi", catBeach: "🏖️ Spiaggia & Mare", catCulture: "🏛️ Cultura & Monumenti",
        
        titleGps: "La mia Posizione", titleStyle: "Stile Mappa", titleAddPin: "Aggiungi Pin", titleSettings: "Impostazioni", titleProfile: "Profilo Utente",

        pickerText: "Sposta la mappa per posizionare il pin", confirm: "Conferma Posizione", cancel: "Annulla",
        newPinTitle: "Nuovo Pin", editPinTitle: "Modifica Pin", lblPlaceName: "Nome Luogo",
        lblSelectCategory: "Seleziona Categoria / Emoji", lblCustomEmoji: "Oppure Emoji Personalizzata",
        lblTags: "Tag (separati da virgola)", lblUploadPhoto: "Carica Foto", dropPhotoText: "Trascina qui un'immagine o sfoglia",
        lblNotes: "Note / Ricordi", btnSavePin: "Salva Pin", btnClose: "Chiudi", 
        
        lblFlyAirport: "✈️ Vola verso un altro Aeroporto conosciuto:",
        selectDestination: "Seleziona destinazione...", btnFly: "Vola ✈️", 
        noNotes: "Nessuna nota presente.", btnEdit: "✏️ Modifica", btnDelete: "🗑️ Elimina", 
        
        settingsTitle: "⚙️ Impostazioni",
        helpTitle: "📖 Guida e Istruzioni d'Uso",
        helpSec1Title: "🔍 Ricerca e Filtri",
        helpSec1Text: "Usa la barra di ricerca per trovare qualsiasi città o indirizzo globale con suggerimenti automatici. Il pulsante Filtra Categoria consente di mostrare sulla mappa solo i pin appartenenti a una specifica categoria.",
        helpSec2Title: "📍 Aggiunta e Gestione Pin",
        helpSec2Text: "Premi il tasto per attivare il mirino centrale sulla mappa. Sposta la mappa fino al punto esatto, conferma e compila la scheda aggiungendo un nome, un'emoji, foto, tag e ricordi personali.",
        helpSec3Title: "✈️ Voli Animati tra Aeroporti",
        helpSec3Text: "Quando selezioni la categoria Aeroporto per un pin, apri la sua scheda per scegliere un altro aeroporto memorizzato e spiccare il volo.",
        btnSaveSettings: "Salva e Chiudi", 

        styleModalTitle: "Personalizza Mappa", lblIconStyle: "Stile Icona Marker (Fisso)",
        lblMarkerColor: "Colore Personalizzato Marker", lblMapColors: "Colori Mappa", 
        colNature: "Natura", colWater: "Acqua", colBuilding: "Edifici", colRoad: "Strade", colRailway: "Ferrovie", 
        btnApplyStyle: "Applica Stile",

        profileTitle: "Profilo Utente", lblUserName: "Nome Utente", lblLanguage: "Lingua Applicazione / Language",
        lblAvatarUpload: "Carica Foto Profilo", avatarUploadText: "Clicca qui per caricare l'immagine", 
        lblKnownPlaces: "Luoghi Conosciuti", lblMainCities: "Città Principali (Max 2)", 
        lblVisitedCities: "Città Visitate", btnSaveProfile: "Salva Profilo",

        statsExploredCities: "🏙️ Città esplorate:", statsExploredCountries: "🌍 Paesi esplorati:",
        statsMarkedPlaces: "📍 Luoghi segnati:", statsMainCities: "🏠 Città principali:",
        statsAirportsUsed: "✈️ Aeroporti usati:", statsTerritory: "🗺️ Territorio:"
    },
    en: {
        searchPlaceholder: "🔍 Search city or location...",
        filterTitle: "🏷️ Filter Category ▾",
        catAll: "All Pins", catFav: "⭐ Favorites", catHome: "🏠 Home", catWork: "💼 Work / Office",
        catAirports: "✈️ Airports / Travel", catFood: "🍽️ Restaurants & Food", catCoffee: "☕ Bar & Coffee",
        catNature: "🌲 Nature & Parks", catBeach: "🏖️ Beach & Sea", catCulture: "🏛️ Culture & Monuments",
        
        titleGps: "My Location", titleStyle: "Map Style", titleAddPin: "Add Pin", titleSettings: "Settings", titleProfile: "User Profile",

        pickerText: "Move map to position the pin", confirm: "Confirm Position", cancel: "Cancel",
        newPinTitle: "New Pin", editPinTitle: "Edit Pin", lblPlaceName: "Place Name",
        lblSelectCategory: "Select Category / Emoji", lblCustomEmoji: "Or Custom Emoji",
        lblTags: "Tags (comma separated)", lblUploadPhoto: "Upload Photo", dropPhotoText: "Drag image here or browse",
        lblNotes: "Notes / Memories", btnSavePin: "Save Pin", btnClose: "Close", 
        
        lblFlyAirport: "✈️ Fly to another known Airport:",
        selectDestination: "Select destination...", btnFly: "Fly ✈️", 
        noNotes: "No notes available.", btnEdit: "✏️ Edit", btnDelete: "🗑️ Delete", 
        
        settingsTitle: "⚙️ Settings",
        helpTitle: "📖 User Guide",
        helpSec1Title: "🔍 Search and Filters",
        helpSec1Text: "Use the search bar to find any city or global address with automatic suggestions. The Filter Category button allows you to display only pins belonging to a specific category.",
        helpSec2Title: "📍 Adding and Managing Pins",
        helpSec2Text: "Press the button to activate the central crosshair on the map. Move the map to the exact spot, confirm, and fill out the form.",
        helpSec3Title: "✈️ Animated Flights Between Airports",
        helpSec3Text: "When you select the Airport category for a pin, open its sheet to choose another stored airport and take flight.",
        btnSaveSettings: "Save and Close", 

        styleModalTitle: "Customize Map", lblIconStyle: "Marker Icon Style (Fixed)",
        lblMarkerColor: "Custom Marker Color", lblMapColors: "Map Colors", 
        colNature: "Nature", colWater: "Water", colBuilding: "Buildings", colRoad: "Roads", colRailway: "Railways", 
        btnApplyStyle: "Apply Style",

        profileTitle: "User Profile", lblUserName: "User Name", lblLanguage: "App Language",
        lblAvatarUpload: "Upload Profile Picture", avatarUploadText: "Click here to upload image", 
        lblKnownPlaces: "Known Places", lblMainCities: "Main Cities (Max 2)", 
        lblVisitedCities: "Visited Cities", btnSaveProfile: "Save Profile",

        statsExploredCities: "🏙️ Explored cities:", statsExploredCountries: "🌍 Explored countries:",
        statsMarkedPlaces: "📍 Marked places:", statsMainCities: "🏠 Main cities:",
        statsAirportsUsed: "✈️ Airports used:", statsTerritory: "🗺️ Territory:"
    }
};

let userMapStyle = JSON.parse(localStorage.getItem('My World Map_mapStyle')) || { 
    isDarkMode: true,
    iconStyle: 'classico', 
    markerColor: '#3b82f6',
    colors: {
        nature: '#14532d',
        water: '#1e3a8a',
        building: '#1e293b',
        road: '#334155',
        railway: '#64748b'
    }
};

// Generatore ID Anonimo Univoco
let uniqueUserId = localStorage.getItem('My World Map_userId');
if (!uniqueUserId) {
    uniqueUserId = 'MAP-USER-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    localStorage.setItem('My World Map_userId', uniqueUserId);
}

let userProfile = JSON.parse(localStorage.getItem('My World Map_user')) || { 
    name: "Utente", 
    userId: uniqueUserId,
    avatar: "",
    language: "it",
    privacy: "all", // 'all', 'cities', 'private'
    mainCities: [],     
    knownPlaces: [],    
    visitedCities: [],
    friends: [] // Lista amici salvati
};

const mapStyleUrl = userMapStyle.isDarkMode ? 'https://tiles.openfreemap.org/styles/dark' : 'https://tiles.openfreemap.org/styles/liberty';

const map = new maplibregl.Map({
    container: 'map',
    style: mapStyleUrl,
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
let activeFilterCategory = "ALL";
let isMovingExistingPlace = false;

// Gestione Modalità Spettatore
let isSpectating = false;
let originalMyData = null;

function applyLanguageTranslations() {
    const lang = userProfile.language || 'it';
    const dict = translations[lang] || translations.it;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerHTML = dict[key];
    });

    const searchInp = document.getElementById('searchInput');
    if (searchInp) searchInp.placeholder = dict.searchPlaceholder;

    const filterBtn = document.getElementById('filterDropdownBtn');
    if (filterBtn && activeFilterCategory === "ALL") {
        filterBtn.innerHTML = dict.filterTitle;
    }

    const gpsBtn = document.getElementById('gpsButton');
    const styleBtn = document.getElementById('styleButton');
    const addBtn = document.getElementById('addOptionButton');
    const settingsBtn = document.getElementById('settingsButton');
    const profBtn = document.getElementById('profileNavBtn');

    if (gpsBtn) gpsBtn.title = dict.titleGps;
    if (styleBtn) styleBtn.title = dict.titleStyle;
    if (addBtn) addBtn.title = dict.titleAddPin;
    if (settingsBtn) settingsBtn.title = dict.titleSettings;
    if (profBtn) profBtn.title = dict.titleProfile;

    updateProfileStats();
}

// ==========================================
// 🎵 SOUNDSCAPE & AUDIO (Web Audio API)
// ==========================================
let audioCtx = null;
let windGain = null;
let waveGain = null;

function initSoundscapes() {
    if (audioCtx) return;
    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const bufferSize = audioCtx.sampleRate * 2;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) { output[i] = Math.random() * 2 - 1; }

        const whiteNoise = audioCtx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 320;
        filter.Q.value = 3.0;

        windGain = audioCtx.createGain();
        windGain.gain.value = 0.0;

        whiteNoise.connect(filter);
        filter.connect(windGain);
        windGain.connect(audioCtx.destination);
        whiteNoise.start();

        const waveSource = audioCtx.createBufferSource();
        waveSource.buffer = noiseBuffer;
        waveSource.loop = true;

        const waveFilter = audioCtx.createBiquadFilter();
        waveFilter.type = 'lowpass';
        waveFilter.frequency.value = 220;

        waveGain = audioCtx.createGain();
        waveGain.gain.value = 0.0;

        waveSource.connect(waveFilter);
        waveFilter.connect(waveGain);
        waveGain.connect(audioCtx.destination);
        waveSource.start();
    } catch(e) {}
}

function updateSoundscapes() {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const zoom = map.getZoom();
    if (windGain) {
        if (zoom < 8) {
            let intensity = (8 - zoom) * 0.012;
            windGain.gain.setTargetAtTime(Math.min(intensity, 0.08), audioCtx.currentTime, 0.5);
        } else {
            windGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.5);
        }
    }
    checkWaterSound(map.getCenter());
}

function checkWaterSound(lngLat) {
    if (!waveGain || !audioCtx) return;
    try {
        const point = map.project(lngLat);
        const features = map.queryRenderedFeatures(point);
        let isOverWater = features.some(f => 
            (f.layer && f.layer.id && f.layer.id.includes('water')) ||
            (f.properties && f.properties.natural === 'water')
        );
        if (isOverWater) {
            waveGain.gain.setTargetAtTime(0.09, audioCtx.currentTime, 0.8);
        } else {
            waveGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 1.2);
        }
    } catch(e) {}
}

function playSound(type) {
    if (!audioCtx) initSoundscapes();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    if (type === 'pop') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
    } else if (type === 'flight') {
        const duration = 2.2;
        const bufferSize = audioCtx.sampleRate * duration;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) { output[i] = Math.random() * 2 - 1; }

        const noise = audioCtx.createBufferSource();
        noise.buffer = noiseBuffer;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.Q.value = 1.5;
        filter.frequency.setValueAtTime(100, now);
        filter.frequency.exponentialRampToValueAtTime(600, now + (duration / 2));
        filter.frequency.exponentialRampToValueAtTime(120, now + duration);

        const noiseGain = audioCtx.createGain();
        noiseGain.gain.setValueAtTime(0.01, now);
        noiseGain.gain.linearRampToValueAtTime(0.25, now + 0.8);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(audioCtx.destination);

        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(60, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + (duration / 2));
        osc.frequency.exponentialRampToValueAtTime(50, now + duration);
        oscGain.gain.setValueAtTime(0.01, now);
        oscGain.gain.linearRampToValueAtTime(0.18, now + 0.9);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(oscGain);
        oscGain.connect(audioCtx.destination);

        noise.start(now);
        osc.start(now);
        noise.stop(now + duration);
        osc.stop(now + duration);
    }
}

['click', 'touchstart', 'mousemove'].forEach(evtType => {
    document.addEventListener(evtType, () => initSoundscapes(), { once: true });
});

map.on('load', () => {
    applyLanguageTranslations();
    applyMapColors();
    enable3DBuildings();
    setupUnexploredAndBoundariesLayer();
    renderMarkers();
    updateMacroCityMarkers();
    updateBoundariesAndUnexploredLayer();
});

map.on('moveend', updateSoundscapes);
map.on('zoom', updateSoundscapes);

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
    } catch (e) {}
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
    map.addLayer({ 'id': 'unexplored-layer', 'type': 'fill', 'source': 'unexplored-src', 'paint': { 'fill-color': '#020617', 'fill-opacity': 0.55 } });
}

function updateBoundariesAndUnexploredLayer() {
    const allKnown = [...(userProfile.mainCities || []), ...(userProfile.knownPlaces || []), ...(userProfile.visitedCities || [])];
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
        (userProfile.knownPlaces || []).forEach(c => {
            const el = document.createElement('div'); el.className = 'macro-city-marker known'; el.innerHTML = `📌 ${c.name}`;
            macroCityMarkers.push(new maplibregl.Marker({ element: el }).setLngLat([c.lng, c.lat]).addTo(map));
        });
        (userProfile.visitedCities || []).forEach(c => {
            const el = document.createElement('div'); el.className = 'macro-city-marker visited'; el.innerHTML = `✈️ ${c.name}`;
            macroCityMarkers.push(new maplibregl.Marker({ element: el }).setLngLat([c.lng, c.lat]).addTo(map));
        });
    }
}

const filterDropdownBtn = document.getElementById('filterDropdownBtn');
const filterDropdownMenu = document.getElementById('filterDropdownMenu');

if (filterDropdownBtn && filterDropdownMenu) {
    filterDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterDropdownMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.filter-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.filter-option').forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            activeFilterCategory = option.getAttribute('data-category');
            filterDropdownBtn.innerHTML = `🏷️ ${option.textContent.trim()} ▾`;
            filterDropdownMenu.classList.add('hidden');
            renderMarkers();
        });
    });

    document.addEventListener('click', () => { filterDropdownMenu.classList.add('hidden'); });
}

const photoFileInput = document.getElementById('photoFileInput');
const imageDropZone = document.getElementById('imageDropZone');
const dropZoneContent = document.getElementById('dropZoneContent');
const imagePreviewWrapper = document.getElementById('imagePreviewWrapper');
const modalPhotoPreview = document.getElementById('modalPhotoPreview');
const removePhotoBtn = document.getElementById('removePhotoBtn');

if (imageDropZone && photoFileInput) {
    ['dragenter', 'dragover'].forEach(eventName => imageDropZone.addEventListener(eventName, (e) => { e.preventDefault(); imageDropZone.classList.add('dragover'); }, false));
    ['dragleave', 'drop'].forEach(eventName => imageDropZone.addEventListener(eventName, (e) => { e.preventDefault(); imageDropZone.classList.remove('dragover'); }, false));
    imageDropZone.addEventListener('drop', (e) => { if (e.dataTransfer.files.length > 0) handleImageFile(e.dataTransfer.files[0]); });
    photoFileInput.addEventListener('change', (e) => { if (e.target.files.length > 0) handleImageFile(e.target.files[0]); });
}

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

if (removePhotoBtn) {
    removePhotoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentBase64Photo = "";
        photoFileInput.value = "";
        modalPhotoPreview.src = "";
        dropZoneContent.classList.remove('hidden');
        imagePreviewWrapper.classList.add('hidden');
    });
}

const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
if (searchInput) {
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
}

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
        const mainSugg = document.getElementById("mainCitySuggestions");
        const knownSugg = document.getElementById("knownCitySuggestions");
        const visitedSugg = document.getElementById("visitedCitySuggestions");
        if (mainSugg) mainSugg.classList.add("hidden");
        if (knownSugg) knownSugg.classList.add("hidden");
        if (visitedSugg) visitedSugg.classList.add("hidden");
    }
});

function setupCityAutocomplete(inputId, suggestionsId, type) {
    const inp = document.getElementById(inputId), sug = document.getElementById(suggestionsId);
    if (!inp || !sug) return;
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
                                addCityToProfileWithPolygon(item, type);
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

function addCityToProfileWithPolygon(item, type) {
    if (isSpectating) return alert("Non puoi modificare il profilo in modalità spettatore!");
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
            if (type === 'main') {
                if (!userProfile.mainCities) userProfile.mainCities = [];
                if (userProfile.mainCities.length >= 2) return alert("Puoi impostare al massimo 2 città principali!");
                userProfile.mainCities.push(cityObj);
            } else if (type === 'known') {
                if (!userProfile.knownPlaces) userProfile.knownPlaces = [];
                userProfile.knownPlaces.push(cityObj);
            } else if (type === 'visited') {
                if (!userProfile.visitedCities) userProfile.visitedCities = [];
                userProfile.visitedCities.push(cityObj);
            }
            saveState(); 
            renderProfileCityChips(); 
            updateMacroCityMarkers(); 
            updateBoundariesAndUnexploredLayer();
        }).catch(() => {});
}

function renderProfileCityChips() {
    const mainList = document.getElementById("mainCitiesList");
    const knownList = document.getElementById("knownCitiesList");
    if (!mainList || !knownList) return;
    
    mainList.innerHTML = "";
    (userProfile.mainCities || []).forEach((c, idx) => {
        const chip = document.createElement("div"); chip.className = "city-chip main-chip"; chip.innerHTML = `🏠 ${c.name} <span class="btn-remove-chip">✕</span>`;
        chip.querySelector(".btn-remove-chip").addEventListener("click", () => {
            if (isSpectating) return;
            userProfile.mainCities.splice(idx, 1); saveState(); renderProfileCityChips(); updateMacroCityMarkers(); updateBoundariesAndUnexploredLayer(); 
        });
        mainList.appendChild(chip);
    });

    knownList.innerHTML = "";
    (userProfile.knownPlaces || []).forEach((c, idx) => {
        const chip = document.createElement("div"); chip.className = "city-chip known-chip"; chip.innerHTML = `📌 ${c.name} <span class="btn-remove-chip">✕</span>`;
        chip.querySelector(".btn-remove-chip").addEventListener("click", () => {
            if (isSpectating) return;
            userProfile.knownPlaces.splice(idx, 1); saveState(); renderProfileCityChips(); updateMacroCityMarkers(); updateBoundariesAndUnexploredLayer(); 
        });
        knownList.appendChild(chip);
    });
}

setupCityAutocomplete("mainCitySearchInput", "mainCitySuggestions", 'main');
setupCityAutocomplete("knownCitySearchInput", "knownCitySuggestions", 'known');
setupCityAutocomplete("visitedCitySearchInput", "visitedCitySuggestions", 'visited');

function loadStyleUI() {
    const cNat = document.getElementById('colorNature');
    const cWat = document.getElementById('colorWater');
    const cBui = document.getElementById('colorBuilding');
    const cRoa = document.getElementById('colorRoad');
    const cRai = document.getElementById('colorRailway');
    const iSel = document.getElementById('iconStyleSelect');
    const mCol = document.getElementById('markerCustomColor');

    if (cNat) cNat.value = userMapStyle.colors.nature || '#14532d';
    if (cWat) cWat.value = userMapStyle.colors.water;
    if (cBui) cBui.value = userMapStyle.colors.building;
    if (cRoa) cRoa.value = userMapStyle.colors.road;
    if (cRai) cRai.value = userMapStyle.colors.railway || '#64748b';
    if (iSel) iSel.value = userMapStyle.iconStyle;
    if (mCol) mCol.value = userMapStyle.markerColor || '#3b82f6';
}

const applyStyleBtn = document.getElementById('applyStyle');
if (applyStyleBtn) {
    applyStyleBtn.addEventListener('click', () => {
        userMapStyle.colors.nature = document.getElementById('colorNature').value;
        userMapStyle.colors.water = document.getElementById('colorWater').value;
        userMapStyle.colors.building = document.getElementById('colorBuilding').value;
        userMapStyle.colors.road = document.getElementById('colorRoad').value;
        userMapStyle.colors.railway = document.getElementById('colorRailway').value;
        userMapStyle.iconStyle = document.getElementById('iconStyleSelect').value;
        userMapStyle.markerColor = document.getElementById('markerCustomColor').value;
        localStorage.setItem('My World Map_mapStyle', JSON.stringify(userMapStyle));
        applyMapColors(); 
        renderMarkers(); 
        document.getElementById('styleModal').classList.remove('open');
    });
}

let places = JSON.parse(localStorage.getItem('My World Map_places')) || { "p1": { name: "Casa Mia", icon: "🏠", category: "Casa", tags: ["casa"], note: "Abitazione principale.", photo: "", lat: 41.9028, lng: 12.4964, isPrivate: false } };
let activeMarkers = [], currentSelectedPlaceId = null, pendingCoords = null, isEditingPlace = false;

function saveState() {
    if (isSpectating) return; // Non salvare nulla se siamo in modalità spettatore
    localStorage.setItem('My World Map_places', JSON.stringify(places));
    localStorage.setItem('My World Map_user', JSON.stringify(userProfile));
    updateProfileStats();
}

function getNeonSvgIcon(iconChar, category) {
    const catLower = (category || '').toLowerCase();
    const svgMap = {
        barber: '<svg viewBox="0 0 24 24"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10-13.5l-3 3-1.41-1.41 3-3L16 2.5z"/></svg>',
        cocktail: '<svg viewBox="0 0 24 24"><path d="M7.5 7L5.5 5h13l-2 2M11 9h2v6h-2zM12 17c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z M19 3H5l7 8z"/></svg>',
        gamepad: '<svg viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H9v2H7v-2H5v-2h2V9h2v2h2v2zm4.5 1c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>',
        home: '<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
        star: '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
        work: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0-2-.9-2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/></svg>',
        plane: '<svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>',
        food: '<svg viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7zm12-3v2h-2v3c0 1.1-.9 2-2 2h-1v7h-2v-7h-1c-1.1 0-2-.9-2-2V6h6z"/></svg>',
        coffee: '<svg viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>',
        beer: '<svg viewBox="0 0 24 24"><path d="M4 5v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-2V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm12 2h2v6h-2V7z"/></svg>',
        nature: '<svg viewBox="0 0 24 24"><path d="M17 12h2L12 2 5 12h2l-5 7h7v4h2v-4h7l-5-7z"/></svg>',
        beach: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
        hotel: '<svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>',
        defaultPin: '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'
    };
    if (catLower.includes('barbiere') || catLower.includes('parrucchiere') || iconChar === '💈') return svgMap.barber;
    if (catLower.includes('cocktail') || iconChar === '🍸') return svgMap.cocktail;
    if (catLower.includes('svago') || catLower.includes('cinema') || catLower.includes('teatro') || iconChar === '🎭') return svgMap.gamepad;
    if (catLower.includes('pub') || catLower.includes('birreria') || iconChar === '🍺') return svgMap.beer;
    if (catLower.includes('natura') || catLower.includes('parco') || iconChar === '🌲') return svgMap.nature;
    if (catLower.includes('spiaggia') || catLower.includes('mare') || iconChar === '🏖️') return svgMap.beach;
    if (catLower.includes('hotel') || catLower.includes('viaggio') || iconChar === '🧳') return svgMap.hotel;
    if (catLower.includes('casa') || iconChar === '🏠') return svgMap.home;
    if (catLower.includes('lavoro') || iconChar === '💼') return svgMap.work;
    if (catLower.includes('aeroporto') || iconChar === '✈️') return svgMap.plane;
    if (catLower.includes('ristorante') || catLower.includes('cibo') || iconChar === '🍽️') return svgMap.food;
    if (catLower.includes('caffè') || catLower.includes('bar') || iconChar === '☕') return svgMap.coffee;
    if (iconChar === '⭐') return svgMap.star;
    return svgMap.defaultPin;
}

function createMarkerElement(item) {
    const el = document.createElement('div');
    el.className = 'custom-pin-wrapper';
    el.style.setProperty('--marker-color', userMapStyle.markerColor || '#3b82f6');
    if (userMapStyle.iconStyle === 'neon') {
        const svgCode = getNeonSvgIcon(item.icon, item.category);
        el.innerHTML = `<div class="pin-neon"><div class="svg-icon">${svgCode}</div></div>`;
    } else if (userMapStyle.iconStyle === 'vintage') {
        el.innerHTML = `<div class="pin-vintage"><span>${item.icon}</span></div>`;
    } else if (userMapStyle.iconStyle === 'arcade') {
        el.innerHTML = `<div class="pin-arcade"><span>${item.icon}</span></div>`;
    } else {
        el.innerHTML = `<div class="pin-classico"><span>${item.icon}</span></div>`;
    }
    return el;
}

function renderMarkers() {
    activeMarkers.forEach(m => m.remove()); 
    activeMarkers = [];
    Object.keys(places).forEach(id => {
        const item = places[id];
        if (item.isPrivate && isSpectating) return; // Nascondi pin privati agli spettatori
        
        if (activeFilterCategory !== "ALL") {
            if (activeFilterCategory === "✈️") {
                if (item.icon !== "✈️" && !item.category.toLowerCase().includes("aeroporto") && !item.category.toLowerCase().includes("viaggio")) return;
            } else if (!item.category.includes(activeFilterCategory) && item.icon !== activeFilterCategory) {
                return;
            }
        }

        const el = createMarkerElement(item);
        el.addEventListener('click', (e) => { e.stopPropagation(); removeTempSearchMarker(); openPlace(id); });
        activeMarkers.push(new maplibregl.Marker({ element: el, anchor: 'bottom' }).setLngLat([item.lng, item.lat]).addTo(map));
    });
}

function loadProfileUI() {
    const nameInput = document.getElementById('profileNameInput');
    if (nameInput) nameInput.value = userProfile.name || "";

    const idDisplay = document.getElementById('myUserIdDisplay');
    if (idDisplay) idDisplay.textContent = userProfile.userId || uniqueUserId;

    const privacySelect = document.getElementById('mapPrivacySelect');
    if (privacySelect) privacySelect.value = userProfile.privacy || "all";

    const imgEl = document.getElementById("profileAvatarImg");
    const placeholderEl = document.getElementById("avatarPlaceholder");
    if (userProfile.avatar && imgEl && placeholderEl) { 
        imgEl.src = userProfile.avatar; 
        imgEl.classList.remove("hidden"); 
        placeholderEl.classList.add("hidden"); 
    } else if(imgEl && placeholderEl) { 
        imgEl.classList.add("hidden"); 
        placeholderEl.classList.remove("hidden"); 
    }
    renderProfileCityChips(); 
    renderFriendsList();
    updateProfileStats();
}

function loadSettingsUI() {
    const settingsLangSel = document.getElementById('settingsLanguageSelect');
    if (settingsLangSel) settingsLangSel.value = userProfile.language || "it";
}

function updateProfileStats() { 
    const lang = userProfile.language || 'it';
    const dict = translations[lang] || translations.it;

    const totalPins = Object.keys(places).length;
    const countEl = document.getElementById("totalPinsCount");
    if (countEl) countEl.textContent = totalPins;

    const allCities = [...(userProfile.mainCities || []), ...(userProfile.knownPlaces || []), ...(userProfile.visitedCities || [])];
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
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.85rem; margin-top: 12px; background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px;">
                <div>${dict.statsExploredCities} <b>${uniqueCitiesCount}</b></div>
                <div>${dict.statsExploredCountries} <b>${uniqueCountriesCount}</b></div>
                <div>${dict.statsMarkedPlaces} <b>${totalPins}</b></div>
                <div>${dict.statsMainCities} <b>${mainCitiesCount}</b></div>
                <div>${dict.statsAirportsUsed} <b>${airportsCount}</b></div>
                <div>${dict.statsTerritory} <b>${explorationPercent}%</b></div>
            </div>
        `;
    }
}

// Gestione Copia ID Amico
const copyMyIdBtn = document.getElementById('copyMyIdBtn');
if (copyMyIdBtn) {
    copyMyIdBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(userProfile.userId || uniqueUserId);
        alert("✅ ID Amico copiato negli appunti! Incollalo su WhatsApp o Telegram per farlo usare a un amico.");
    });
}

// Gestione Lista Amici & Aggiunta
function renderFriendsList() {
    const container = document.getElementById('friendsListContainer');
    if (!container) return;
    container.innerHTML = "";

    if (!userProfile.friends || userProfile.friends.length === 0) {
        container.innerHTML = `<span style="font-size: 0.78rem; color: #64748b;">Nessun amico aggiunto. Inserisci un ID sopra per esplorare la sua mappa!</span>`;
        return;
    }

    userProfile.friends.forEach((friend, idx) => {
        const chip = document.createElement('div');
        chip.className = 'friend-chip';
        chip.innerHTML = `
            <span>👤 ${friend.name || 'Amico'} (${friend.userId})</span>
            <div style="display: flex; gap: 6px;">
                <button class="btn-spectate" style="background: #38bdf8; color: #0f172a; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 0.75rem;">👁️ Guarda</button>
                <button class="btn-remove-friend" style="color: #fca5a5;">✕</button>
            </div>
        `;
        chip.querySelector('.btn-spectate').addEventListener('click', () => {
            document.getElementById('profileModal').classList.remove('open');
            startSpectating(friend);
        });
        chip.querySelector('.btn-remove-friend').addEventListener('click', () => {
            userProfile.friends.splice(idx, 1);
            saveState();
            renderFriendsList();
        });
        container.appendChild(chip);
    });
}

const addFriendBtn = document.getElementById('addFriendBtn');
if (addFriendBtn) {
    addFriendBtn.addEventListener('click', () => {
        const input = document.getElementById('friendIdInput');
        const friendId = input ? input.value.trim().toUpperCase() : "";
        if (!friendId) return alert("Inserisci un ID Amico valido!");
        if (friendId === (userProfile.userId || uniqueUserId)) return alert("Non puoi aggiungere te stesso!");

        if (!userProfile.friends) userProfile.friends = [];
        
        // Simulazione caricamento profilo amico (o recupero dati di test mock se file non presente)
        // In un contesto reale P2P, l'amico ti passa il suo file backup JSON o stringa dati.
        // Qui permettiamo di importare il backup dell'amico tramite file o simuliamo un profilo di test.
        const mockFriendProfile = {
            userId: friendId,
            name: "Amico di " + friendId.slice(-4),
            userProfile: { name: "Amico " + friendId.slice(-4), mainCities: [{ name: "Parigi", lat: 48.8566, lng: 2.3522 }], knownPlaces: [], visitedCities: [], privacy: "all" },
            places: { "fp1": { name: "Tour Eiffel", icon: "🏛️", category: "Cultura", lat: 48.8584, lng: 2.2945, note: "Bellissima!", isPrivate: false } }
        };

        userProfile.friends.push(mockFriendProfile);
        saveState();
        renderFriendsList();
        input.value = "";
        alert("✅ Amico aggiunto con successo! Clicca su 'Guarda' per aprire la sua mappa in modalità spettatore.");
    });
}

// Avvia Modalità Spettatore
function startSpectating(friendData) {
    if (!isSpectating) {
        originalMyData = {
            places: JSON.parse(JSON.stringify(places)),
            userProfile: JSON.parse(JSON.stringify(userProfile))
        };
    }
    isSpectating = true;

    // Applica dati dell'amico in sola lettura
    if (friendData.userProfile.privacy === 'private') {
        return alert("🔒 La mappa di questo utente è impostata come privata!");
    }

    if (friendData.userProfile.privacy === 'cities') {
        places = {}; // Nascondi i pin
        alert("ℹ️ L'utente mostra solo le città e le statistiche (Pin nascosti per privacy).");
    } else {
        places = friendData.places || {};
    }

    userProfile = friendData.userProfile;
    
    // Mostra banner superiore spettatore
    const banner = document.getElementById('spectatorBanner');
    const bannerText = document.getElementById('spectatorBannerText');
    if (banner && bannerText) {
        bannerText.textContent = `👁️ Stai guardando la mappa in sola lettura di: ${friendData.name}`;
        banner.classList.remove('hidden');
    }

    // Disabilita tasti modifica nel PlaceSheet
    const footerBtns = document.getElementById('sheetFooterButtons');
    if (footerBtns) footerBtns.style.display = 'none';

    renderMarkers();
    updateMacroCityMarkers();
    updateBoundariesAndUnexploredLayer();
}

// Esci da Modalità Spettatore
const exitSpectatorBtn = document.getElementById('exitSpectatorBtn');
if (exitSpectatorBtn) {
    exitSpectatorBtn.addEventListener('click', () => {
        if (!isSpectating || !originalMyData) return;
        places = originalMyData.places;
        userProfile = originalMyData.userProfile;
        isSpectating = false;
        originalMyData = null;

        document.getElementById('spectatorBanner').classList.add('hidden');
        const footerBtns = document.getElementById('sheetFooterButtons');
        if (footerBtns) footerBtns.style.display = 'flex';

        renderMarkers();
        updateMacroCityMarkers();
        updateBoundariesAndUnexploredLayer();
        alert("🗺️ Sei tornato sulla tua mappa personale.");
    });
}

const profileAvatarFileInput = document.getElementById('profileAvatarFileInput');
if (profileAvatarFileInput) {
    profileAvatarFileInput.addEventListener('change', (e) => {
        if (isSpectating) return alert("Non puoi modificare il profilo in modalità spettatore!");
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            if (!file.type.startsWith('image/')) return alert('Seleziona un file immagine.');
            const reader = new FileReader();
            reader.onload = (evt) => {
                userProfile.avatar = evt.target.result;
                const img = document.getElementById("profileAvatarImg");
                const place = document.getElementById("avatarPlaceholder");
                if(img) { img.src = userProfile.avatar; img.classList.remove("hidden"); }
                if(place) place.classList.add("hidden");
            };
            reader.readAsDataURL(file);
        }
    });
}

const saveProfileAvatarBtn = document.getElementById("saveProfileAvatar");
if (saveProfileAvatarBtn) {
    saveProfileAvatarBtn.addEventListener("click", () => {
        if (isSpectating) return alert("Non puoi salvare il profilo in modalità spettatore!");
        const nameInput = document.getElementById("profileNameInput");
        const privacySelect = document.getElementById("mapPrivacySelect");
        userProfile.name = nameInput ? (nameInput.value.trim() || "Utente") : "Utente";
        if (privacySelect) userProfile.privacy = privacySelect.value;
        
        saveState(); 
        loadProfileUI(); 
        document.getElementById("profileModal").classList.remove("open");
    });
}

const saveSettingsBtn = document.getElementById("saveSettingsBtn");
if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener("click", () => {
        const settingsLangSel = document.getElementById("settingsLanguageSelect");
        if (settingsLangSel) {
            userProfile.language = settingsLangSel.value;
        }
        saveState();
        applyLanguageTranslations();
        document.getElementById("settingsModal").classList.remove("open");
    });
}

const placeSheet = document.getElementById("placeSheet");

function openPlace(id) {
    currentSelectedPlaceId = id; 
    const place = places[id]; 
    if (!place) return;
    
    const lang = userProfile.language || 'it';
    const dict = translations[lang] || translations.it;

    document.getElementById("placeIcon").textContent = place.icon;
    document.getElementById("placeName").textContent = place.name;
    document.getElementById("placeCategory").textContent = `${place.icon} ${place.category}`;
    document.getElementById("placeNote").textContent = place.note || dict.noNotes;

    let coordsEl = document.getElementById("placeCoords");
    if (!coordsEl) {
        coordsEl = document.createElement("div"); 
        coordsEl.id = "placeCoords";
        coordsEl.style.fontSize = "0.85rem"; 
        coordsEl.style.opacity = "0.75"; 
        coordsEl.style.marginTop = "6px"; 
        coordsEl.style.color = "#38bdf8";
        document.getElementById("placeCategory").insertAdjacentElement("afterend", coordsEl);
    }
    coordsEl.innerHTML = `📍 ${toSexagesimal(place.lat, false)}, ${toSexagesimal(place.lng, true)}`;

    const airportFlyContainer = document.getElementById("airportFlyContainer");
    const airportSelect = document.getElementById("airportDestinationSelect");
    if (place.icon === "✈️" || place.category.toLowerCase().includes("aeroporto")) {
        airportSelect.innerHTML = `<option value="">${dict.selectDestination}</option>`;
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
    if (place.photo) { 
        document.getElementById("placeImage").src = place.photo; 
        imgContainer.classList.remove("hidden"); 
    } else {
        imgContainer.classList.add("hidden");
    }

    const tagsContainer = document.getElementById("placeTags"); 
    tagsContainer.innerHTML = "";
    (place.tags || []).forEach(t => { 
        if(t && t.trim()) { 
            const span = document.createElement("span"); 
            span.textContent = `#${t.trim()} `; 
            tagsContainer.appendChild(span); 
        } 
    });
    
    if (placeSheet) placeSheet.classList.add("open");
}

const flyToAirportBtn = document.getElementById("flyToAirportBtn");
if (flyToAirportBtn) {
    flyToAirportBtn.addEventListener("click", () => {
        const destId = document.getElementById("airportDestinationSelect").value;
        if (!destId) return alert("Seleziona un aeroporto di destinazione!");
        const destPlace = places[destId];
        if (destPlace) {
            playSound('flight');
            if (placeSheet) placeSheet.classList.remove("open");
            map.flyTo({ center: [destPlace.lng, destPlace.lat], zoom: 15, pitch: 30, speed: 1.2, curve: 1.4 });
            setTimeout(() => openPlace(destId), 2000);
        }
    });
}

const deletePlaceBtn = document.getElementById("deletePlaceBtn");
if (deletePlaceBtn) {
    deletePlaceBtn.addEventListener("click", () => {
        if (isSpectating) return alert("Non puoi eliminare pin in modalità spettatore!");
        const lang = userProfile.language || 'it';
        const dict = translations[lang] || translations.it;
        if (currentSelectedPlaceId && confirm(dict.confirmDeletePin || "Eliminare questo pin?")) { 
            delete places[currentSelectedPlaceId]; 
            saveState(); 
            if (placeSheet) placeSheet.classList.remove("open"); 
            renderMarkers(); 
        }
    });
}

const movePlaceBtn = document.getElementById("movePlaceBtn");
if (movePlaceBtn) {
    movePlaceBtn.addEventListener("click", () => {
        if (isSpectating) return alert("Non puoi spostare pin in modalità spettatore!");
        if (!currentSelectedPlaceId) return;
        isMovingExistingPlace = true;
        if (placeSheet) placeSheet.classList.remove("open");
        document.getElementById("mapPicker").classList.remove("hidden");
        const place = places[currentSelectedPlaceId];
        if (place) { map.flyTo({ center: [place.lng, place.lat], zoom: 16 }); }
    });
}

const editPlaceBtn = document.getElementById("editPlaceBtn");
if (editPlaceBtn) {
    editPlaceBtn.addEventListener("click", () => {
        if (isSpectating) return alert("Non puoi modificare pin in modalità spettatore!");
        const place = places[currentSelectedPlaceId]; 
        if (!place) return;
        const lang = userProfile.language || 'it';
        const dict = translations[lang] || translations.it;
        isEditingPlace = true;
        document.getElementById("modalTitle").textContent = dict.editPinTitle;
        document.getElementById("placeInput").value = place.name;
        document.getElementById("customEmojiInput").value = place.icon;
        document.getElementById("tagsInput").value = (place.tags || []).join(",");
        document.getElementById("noteInput").value = place.note || "";
        const privCheck = document.getElementById("privatePinCheck");
        if (privCheck) privCheck.checked = !!place.isPrivate;
        
        if (place.photo) {
            currentBase64Photo = place.photo; 
            modalPhotoPreview.src = place.photo;
            dropZoneContent.classList.add('hidden'); 
            imagePreviewWrapper.classList.remove('hidden');
        } else if (removePhotoBtn) {
            removePhotoBtn.click();
        }

        if (placeSheet) placeSheet.classList.remove("open"); 
        document.getElementById("addModal").classList.add("open");
    });
}

const gpsButton = document.getElementById("gpsButton");
if (gpsButton) {
    gpsButton.addEventListener("click", () => {
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
}

const addOptionButton = document.getElementById("addOptionButton");
if (addOptionButton) {
    addOptionButton.addEventListener("click", () => {
        if (isSpectating) return alert("Non puoi aggiungere pin sulla mappa di un amico in modalità spettatore!");
        document.getElementById("mapPicker").classList.remove("hidden");
    });
}

const cancelPick = document.getElementById("cancelPick");
if (cancelPick) {
    cancelPick.addEventListener("click", () => { 
        isMovingExistingPlace = false;
        document.getElementById("mapPicker").classList.add("hidden"); 
        removeTempSearchMarker(); 
    });
}

const confirmPick = document.getElementById("confirmPick");
if (confirmPick) {
    confirmPick.addEventListener("click", () => {
        const center = map.getCenter(); 
        const lat = center.lat;
        const lng = center.lng;

        if (isMovingExistingPlace && currentSelectedPlaceId) {
            if (places[currentSelectedPlaceId]) {
                places[currentSelectedPlaceId].lat = lat;
                places[currentSelectedPlaceId].lng = lng;
                saveState();
                renderMarkers();
                playSound('pop');
                alert("✅ Posizione del pin aggiornata con successo!");
            }
            isMovingExistingPlace = false;
            document.getElementById("mapPicker").classList.add("hidden");
            openPlace(currentSelectedPlaceId);
            return;
        }

        const allAllowedAreas = [
            ...(userProfile.mainCities || []),
            ...(userProfile.knownPlaces || []),
            ...(userProfile.visitedCities || [])
        ];

        if (allAllowedAreas.length === 0) {
            alert("⚠️ Prima di aggiungere un pin, devi aggiungere almeno una città principale, un luogo conosciuto o una città visitata nel tuo Profilo!");
            return;
        }

        let isInsideAllowedArea = false;
        allAllowedAreas.forEach(city => {
            if (city.geojson && isPointInsideGeojson({ lat, lng }, city.geojson)) isInsideAllowedArea = true;
            if (!isInsideAllowedArea && city.boundingbox && city.boundingbox.length === 4) {
                const [latMin, latMax, lonMin, lonMax] = city.boundingbox.map(Number);
                if (lat >= latMin && lat <= latMax && lng >= lonMin && lng <= lonMax) isInsideAllowedArea = true;
            }
            if (Math.hypot(lat - city.lat, lng - city.lng) < 0.15) isInsideAllowedArea = true;
        });

        if (!isInsideAllowedArea) {
            alert("🚫 BLOCCO DI SICUREZZA: Non puoi posizionare pin in aree inesplorate o fuori dai confini delle tue città e luoghi conosciuti!");
            return;
        }

        pendingCoords = { lat: lat, lng: lng }; 
        isEditingPlace = false;
        const lang = userProfile.language || 'it';
        const dict = translations[lang] || translations.it;
        document.getElementById("modalTitle").textContent = dict.newPinTitle;
        document.getElementById("placeInput").value = ""; 
        document.getElementById("customEmojiInput").value = "";
        document.getElementById("tagsInput").value = ""; 
        document.getElementById("noteInput").value = ""; 
        const privCheck = document.getElementById("privatePinCheck");
        if (privCheck) privCheck.checked = false;
        if(removePhotoBtn) removePhotoBtn.click();
        document.getElementById("mapPicker").classList.add("hidden"); 
        document.getElementById("addModal").classList.add("open");
    });
}

const savePlace = document.getElementById("savePlace");
if (savePlace) {
    savePlace.addEventListener("click", () => {
        const name = document.getElementById("placeInput").value.trim(); 
        if (!name) return alert("Inserisci un nome!");
        const customEmoji = document.getElementById("customEmojiInput").value.trim();
        const [catName, defaultIcon] = document.getElementById("iconCategorySelect").value.split("|");
        const icon = customEmoji || defaultIcon;
        const isPrivate = document.getElementById("privatePinCheck").checked;
        removeTempSearchMarker();

        const lang = userProfile.language || 'it';
        const dict = translations[lang] || translations.it;

        if (isEditingPlace && currentSelectedPlaceId) {
            places[currentSelectedPlaceId].name = name; 
            places[currentSelectedPlaceId].icon = icon;
            places[currentSelectedPlaceId].category = catName; 
            places[currentSelectedPlaceId].tags = document.getElementById("tagsInput").value.split(",");
            places[currentSelectedPlaceId].photo = currentBase64Photo; 
            places[currentSelectedPlaceId].note = document.getElementById("noteInput").value || dict.noNotes;
            places[currentSelectedPlaceId].isPrivate = isPrivate;
            renderMarkers(); 
            saveState(); 
            document.getElementById("addModal").classList.remove("open"); 
            openPlace(currentSelectedPlaceId);
        } else {
            const id = `place-${Date.now()}`;
            places[id] = { 
                name: name, 
                icon: icon, 
                category: catName, 
                tags: document.getElementById("tagsInput").value.split(","), 
                photo: currentBase64Photo, 
                note: document.getElementById("noteInput").value || dict.noNotes, 
                lat: pendingCoords.lat, 
                lng: pendingCoords.lng,
                isPrivate: isPrivate
            };
            playSound('pop');
            renderMarkers(); 
            saveState(); 
            document.getElementById("addModal").classList.remove("open"); 
            openPlace(id);
        }
    });
}

const closeModal = document.getElementById("closeModal");
if (closeModal) {
    closeModal.addEventListener("click", () => { 
        document.getElementById("addModal").classList.remove("open"); 
        removeTempSearchMarker(); 
    });
}

const exportJsonBtn = document.getElementById("exportJsonBtn");
if (exportJsonBtn) {
    exportJsonBtn.addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ places, userProfile }));
        const a = document.createElement('a'); 
        a.setAttribute("href", dataStr); 
        a.setAttribute("download", "my_world_map_backup.json");
        document.body.appendChild(a); 
        a.click(); 
        a.remove();
    });
}

const importJsonBtn = document.getElementById("importJsonBtn");
const importJsonFileInput = document.getElementById("importJsonFileInput");

if (importJsonBtn && importJsonFileInput) {
    importJsonBtn.addEventListener("click", () => importJsonFileInput.click());
    importJsonFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);
                if (importedData && importedData.places && importedData.userProfile) {
                    if (confirm("⚠️ Importando questo backup i dati attuali verranno sovrascritti. Vuoi procedere?")) {
                        places = importedData.places;
                        userProfile = importedData.userProfile;
                        saveState();
                        renderMarkers();
                        updateMacroCityMarkers();
                        updateBoundariesAndUnexploredLayer();
                        applyLanguageTranslations();
                        loadProfileUI();
                        loadSettingsUI();
                        alert("✅ Dati importati con successo!");
                        document.getElementById("settingsModal").classList.remove("open");
                    }
                } else {
                    alert("❌ File di backup non valido o incompleto.");
                }
            } catch (err) {
                alert("❌ Errore durante la lettura del file JSON.");
            }
            importJsonFileInput.value = "";
        };
        reader.readAsText(file);
    });
}

const settingsButton = document.getElementById("settingsButton");
if (settingsButton) {
    settingsButton.addEventListener("click", () => {
        loadSettingsUI();
        document.getElementById("settingsModal").classList.add("open");
    });
}

const closeSheet = document.getElementById("closeSheet");
if (closeSheet) closeSheet.addEventListener("click", () => placeSheet.classList.remove("open"));

const styleButton = document.getElementById("styleButton");
const closeStyle = document.getElementById("closeStyle");
if (styleButton) styleButton.addEventListener("click", () => { loadStyleUI(); document.getElementById("styleModal").classList.add("open"); });
if (closeStyle) closeStyle.addEventListener("click", () => document.getElementById("styleModal").classList.remove("open"));

const profileNavBtn = document.getElementById("profileNavBtn");
const closeProfile = document.getElementById("closeProfile");
if (profileNavBtn) {
    profileNavBtn.addEventListener("click", (e) => { 
        e.stopPropagation(); 
        loadProfileUI(); 
        document.getElementById("profileModal").classList.add("open"); 
    });
}
if (closeProfile) {
    closeProfile.addEventListener("click", () => {
        document.getElementById("profileModal").classList.remove("open");
    });
}

// Diario di viaggio
const openDiaryBtn = document.getElementById("openDiaryBtn");
const diaryModal = document.getElementById("diaryModal");
const closeDiaryBtn = document.getElementById("closeDiaryBtn");
const diaryCitySelect = document.getElementById("diaryCitySelect");
const diaryPinsContainer = document.getElementById("diaryPinsContainer");

if (openDiaryBtn) {
    openDiaryBtn.addEventListener("click", () => {
        diaryCitySelect.innerHTML = `<option value="">-- Seleziona una città visitata --</option>`;
        (userProfile.visitedCities || []).forEach((c, idx) => {
            const opt = document.createElement("option");
            opt.value = idx;
            opt.textContent = `✈️ ${c.name} (${c.fullName || ''})`;
            diaryCitySelect.appendChild(opt);
        });
        diaryPinsContainer.innerHTML = `<p style="text-align: center; color: #64748b; font-size: 0.85rem; padding: 20px;">Seleziona una città per visualizzare i pin correlati.</p>`;
        diaryModal.classList.add("open");
    });
}

if (closeDiaryBtn) {
    closeDiaryBtn.addEventListener("click", () => diaryModal.classList.remove("open"));
}

if (diaryCitySelect) {
    diaryCitySelect.addEventListener("change", function() {
        const cityIdx = this.value;
        if (cityIdx === "") {
            diaryPinsContainer.innerHTML = `<p style="text-align: center; color: #64748b; font-size: 0.85rem; padding: 20px;">Seleziona una città per visualizzare i pin correlati.</p>`;
            return;
        }
        const city = userProfile.visitedCities[cityIdx];
        if (!city) return;

        diaryPinsContainer.innerHTML = "";
        let matchedPins = [];
        Object.keys(places).forEach(id => {
            const p = places[id];
            if (p.isPrivate && isSpectating) return;
            let isInside = false;
            if (city.boundingbox && city.boundingbox.length === 4) {
                const [latMin, latMax, lonMin, lonMax] = city.boundingbox.map(Number);
                if (p.lat >= latMin && p.lat <= latMax && p.lng >= lonMin && p.lng <= lonMax) isInside = true;
            }
            const dist = Math.hypot(p.lat - city.lat, p.lng - city.lng);
            if (isInside || dist < 0.35) matchedPins.push({ id, ...p });
        });

        if (matchedPins.length === 0) {
            diaryPinsContainer.innerHTML = `<p style="text-align: center; color: #94a3b8; font-size: 0.85rem; padding: 20px;">Nessun pin trovato per ${city.name}.</p>`;
        } else {
            matchedPins.forEach(pin => {
                const card = document.createElement("div");
                card.style.background = "rgba(255,255,255,0.04)";
                card.style.border = "1px solid rgba(255,255,255,0.08)";
                card.style.borderRadius = "8px";
                card.style.padding = "10px";
                card.style.display = "flex";
                card.style.alignItems = "center";
                card.style.justifyContent = "space-between";
                card.style.gap = "10px";
                card.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 1.4rem;">${pin.icon}</span>
                        <div>
                            <div style="font-weight: 600; font-size: 0.9rem; color: #fff;">${pin.name}</div>
                            <div style="font-size: 0.75rem; color: #94a3b8;">${pin.category}</div>
                        </div>
                    </div>
                    <button class="btn-primary" style="padding: 6px 12px; font-size: 0.75rem; flex: unset;">Vai al Pin 📍</button>
                `;
                card.querySelector("button").addEventListener("click", () => {
                    diaryModal.classList.remove("open");
                    document.getElementById("profileModal").classList.remove("open");
                    map.flyTo({ center: [pin.lng, pin.lat], zoom: 16, speed: 1.2 });
                    setTimeout(() => openPlace(pin.id), 1000);
                });
                diaryPinsContainer.appendChild(card);
            });
        }
    });
}

function isPointInsideGeojson(point, geojson) {
    const x = point.lng, y = point.lat;
    function rayCast(polygonCoords) {
        let inside = false;
        for (let i = 0, j = polygonCoords.length - 1; i < polygonCoords.length; j = i++) {
            const xi = polygonCoords[i][0], yi = polygonCoords[i][1];
            const xj = polygonCoords[j][0], yj = polygonCoords[j][1];
            const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }
    if (geojson.type === "Polygon") return rayCast(geojson.coordinates[0]);
    else if (geojson.type === "MultiPolygon") {
        for (let poly of geojson.coordinates) { if (rayCast(poly[0])) return true; }
    }
    return false;
}
