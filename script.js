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
        
        titleGps: "La mia Posizione", titleDayNight: "Cambia Modalità Giorno/Notte",
        titleStyle: "Stile Mappa", titlePrint: "Stampa / Esporta Mappa (GIS)", titleAddPin: "Aggiungi Pin", titleHelp: "Istruzioni d'Uso", titleProfile: "Profilo Utente",

        pickerText: "Sposta la mappa per posizionare il pin", confirm: "Conferma Posizione", cancel: "Annulla",
        newPinTitle: "Nuovo Pin", editPinTitle: "Modifica Pin", lblPlaceName: "Nome Luogo",
        lblSelectCategory: "Seleziona Categoria / Emoji", lblCustomEmoji: "Oppure Emoji Personalizzata",
        lblTags: "Tag (separati da virgola)", lblUploadPhoto: "Carica Foto", dropPhotoText: "Trascina qui un'immagine o sfoglia",
        lblNotes: "Note / Ricordi", btnSavePin: "Salva Pin", btnClose: "Chiudi", 
        
        lblFlyAirport: "✈️ Vola verso un altro Aeroporto conosciuto:",
        selectDestination: "Seleziona destinazione...", btnFly: "Vola ✈️", 
        noNotes: "Nessuna nota presente.", btnEdit: "✏️ Modifica", btnDelete: "🗑️ Elimina", 
        
        printModalTitle: "🖨️ Esporta / Stampa Mappa (GIS Layout)",
        lblPrintTitle: "Titolo Mappa / Map Title",
        lblPrintFormat: "Formato Pagina / Page Format",
        lblPrintElements: "Elementi Opzionali Layout",
        chkNorth: "Mostra Freccia del Nord 🧭",
        chkScale: "Mostra Scala Grafica 📏",
        chkLegend: "Mostra Legenda Pin 📋",
        btnOpenComposer: "Apri Anteprima di Stampa",
        btnDownloadImg: "💾 Salva Immagine (PNG)",
        legendHeader: "Legenda Pin",
        composerEditorTitle: "Layout Editor - Trascina gli elementi per posizionarli",

        helpTitle: "📖 Guida Completa all'Uso",
        helpSec1Title: "🔍 Ricerca e Filtri",
        helpSec1Text: "Usa la barra di ricerca per trovare qualsiasi città o indirizzo globale con suggerimenti automatici.",
        helpSec2Title: "📍 Aggiunta e Gestione Pin",
        helpSec2Text: "Premi il tasto per attivare il mirino centrale sulla mappa e salvare luoghi con note, tag e foto.",
        helpSec3Title: "🖨️ Stampa ed Esportazione GIS",
        helpSec3Text: "Usa il pulsante di stampa per creare un layout personalizzato con titolo, freccia del nord, scala e legenda trascinabili.",
        btnGotIt: "Ho Capito", 

        styleModalTitle: "Personalizza Mappa", lblIconStyle: "Stile Icona Marker (Fisso)",
        lblMarkerColor: "Colore Personalizzato Marker", lblMapColors: "Colori Mappa", 
        colNature: "Natura", colWater: "Acqua", colBuilding: "Edifici", colRoad: "Strade", colRailway: "Ferrovie", 
        btnApplyStyle: "Applica Stile",

        profileTitle: "Profilo Utente", lblUserName: "Nome Utente", lblLanguage: "Lingua Applicazione / Language",
        lblAvatarUpload: "Carica Foto Profilo", avatarUploadText: "Clicca qui per caricare l'immagine", 
        lblKnownPlaces: "Luoghi Conosciuti", lblMainCities: "Città Principali (Max 2)", 
        lblVisitedCities: "Città Visitate", btnBackup: "📥 Backup Dati (JSON)", btnSaveProfile: "Salva Profilo",

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
        
        titleGps: "My Location", titleDayNight: "Toggle Day/Night Mode",
        titleStyle: "Map Style", titlePrint: "Print / Export Map (GIS)", titleAddPin: "Add Pin", titleHelp: "User Guide", titleProfile: "User Profile",

        pickerText: "Move map to position the pin", confirm: "Confirm Position", cancel: "Cancel",
        newPinTitle: "New Pin", editPinTitle: "Edit Pin", lblPlaceName: "Place Name",
        lblSelectCategory: "Select Category / Emoji", lblCustomEmoji: "Or Custom Emoji",
        lblTags: "Tags (comma separated)", lblUploadPhoto: "Upload Photo", dropPhotoText: "Drag image here or browse",
        lblNotes: "Notes / Memories", btnSavePin: "Save Pin", btnClose: "Close", 
        
        lblFlyAirport: "✈️ Fly to another known Airport:",
        selectDestination: "Select destination...", btnFly: "Fly ✈️", 
        noNotes: "No notes available.", btnEdit: "✏️ Edit", btnDelete: "🗑️ Delete", 
        
        printModalTitle: "🖨️ Export / Print Map (GIS Layout)",
        lblPrintTitle: "Map Title",
        lblPrintFormat: "Page Format",
        lblPrintElements: "Optional Layout Elements",
        chkNorth: "Show North Arrow 🧭",
        chkScale: "Show Scale Bar 📏",
        chkLegend: "Show Pin Legend 📋",
        btnOpenComposer: "Open Print Preview",
        btnDownloadImg: "💾 Save Image (PNG)",
        legendHeader: "Pin Legend",
        composerEditorTitle: "Layout Editor - Drag elements to position them",

        helpTitle: "📖 User Guide",
        helpSec1Title: "🔍 Search and Filters",
        helpSec1Text: "Use the search bar to find any city or global address with automatic suggestions.",
        helpSec2Title: "📍 Adding and Managing Pins",
        helpSec2Text: "Press the button to activate the central crosshair on the map and save locations with notes, tags, and photos.",
        helpSec3Title: "🖨️ GIS Printing & Export",
        helpSec3Text: "Use the print button to create a custom layout with draggable title, north arrow, scale bar, and legend.",
        btnGotIt: "Got It", 

        styleModalTitle: "Customize Map", lblIconStyle: "Marker Icon Style (Fixed)",
        lblMarkerColor: "Custom Marker Color", lblMapColors: "Map Colors", 
        colNature: "Nature", colWater: "Water", colBuilding: "Buildings", colRoad: "Roads", colRailway: "Railways", 
        btnApplyStyle: "Apply Style",

        profileTitle: "User Profile", lblUserName: "User Name", lblLanguage: "App Language",
        lblAvatarUpload: "Upload Profile Picture", avatarUploadText: "Click here to upload image", 
        lblKnownPlaces: "Known Places", lblMainCities: "Main Cities (Max 2)", 
        lblVisitedCities: "Visited Cities", btnBackup: "📥 Data Backup (JSON)", btnSaveProfile: "Save Profile",

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

let userProfile = JSON.parse(localStorage.getItem('My World Map_user')) || { 
    name: "Utente", 
    avatar: "",
    language: "it",
    mainCities: [],     
    visitedCities: []   
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
    const dayNightBtn = document.getElementById('dayNightButton');
    const styleBtn = document.getElementById('styleButton');
    const printBtn = document.getElementById('printLayoutBtn');
    const addBtn = document.getElementById('addOptionButton');
    const helpBtn = document.getElementById('helpButton');
    const profBtn = document.getElementById('profileNavBtn');

    if (gpsBtn) gpsBtn.title = dict.titleGps;
    if (dayNightBtn) dayNightBtn.title = dict.titleDayNight;
    if (styleBtn) styleBtn.title = dict.titleStyle;
    if (printBtn) printBtn.title = dict.titlePrint;
    if (addBtn) addBtn.title = dict.titleAddPin;
    if (helpBtn) helpBtn.title = dict.titleHelp;
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
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

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
    } catch(e) { console.log("Audio non inizializzato:", e); }
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
    } 
    else if (type === 'flight') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.8);
        osc.frequency.exponentialRampToValueAtTime(200, now + 1.5);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.7);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 1.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 1.5);
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
    map.addLayer({ 'id': 'unexplored-layer', 'type': 'fill', 'source': 'unexplored-src', 'paint': { 'fill-color': userMapStyle.isDarkMode ? '#020617' : '#94a3b8', 'fill-opacity': 0.55 } });
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

    document.addEventListener('click', () => {
        filterDropdownMenu.classList.add('hidden');
    });
}

const dayNightButton = document.getElementById('dayNightButton');
if (dayNightButton) {
    dayNightButton.addEventListener('click', () => {
        userMapStyle.isDarkMode = !userMapStyle.isDarkMode;
        if (userMapStyle.isDarkMode) {
            userMapStyle.colors = { nature: '#14532d', water: '#1e3a8a', building: '#1e293b', road: '#334155', railway: '#64748b' };
            map.setStyle('https://tiles.openfreemap.org/styles/dark');
        } else {
            userMapStyle.colors = { nature: '#86efac', water: '#93c5fd', building: '#e2e8f0', road: '#cbd5e1', railway: '#94a3b8' };
            map.setStyle('https://tiles.openfreemap.org/styles/liberty');
        }
        localStorage.setItem('My World Map_mapStyle', JSON.stringify(userMapStyle));
        setTimeout(() => {
            applyMapColors();
            setupUnexploredAndBoundariesLayer();
            updateBoundariesAndUnexploredLayer();
        }, 500);
    });
}

// ==========================================
// 🖨️ GESTIONE STAMPA E LAYOUT GIS COMPOSER
// ==========================================
const printLayoutBtn = document.getElementById('printLayoutBtn');
const printModal = document.getElementById('printModal');
const closePrintModal = document.getElementById('closePrintModal');
const generatePrintPreviewBtn = document.getElementById('generatePrintPreviewBtn');
const printComposerOverlay = document.getElementById('printComposerOverlay');
const closeComposerBtn = document.getElementById('closeComposerBtn');
const downloadImageBtn = document.getElementById('downloadImageBtn');

if (printLayoutBtn) {
    printLayoutBtn.addEventListener('click', () => printModal.classList.add('open'));
}
if (closePrintModal) {
    closePrintModal.addEventListener('click', () => printModal.classList.remove('open'));
}

if (generatePrintPreviewBtn) {
    generatePrintPreviewBtn.addEventListener('click', () => {
        printModal.classList.remove('open');
        
        const titleText = document.getElementById('printTitleInput').value || "My World Map";
        const format = document.getElementById('printFormatSelect').value;
        const showNorth = document.getElementById('chkNorthNorthArrow') ? document.getElementById('chkNorthNorthArrow').checked : document.getElementById('chkNorth').checked;
        const showScale = document.getElementById('chkScaleBar') ? document.getElementById('chkScaleBar').checked : document.getElementById('chkScale').checked;
        const showLegend = document.getElementById('chkLegend').checked;

        document.getElementById('compHeaderTitle').textContent = titleText;
        
        const page = document.getElementById('composerPage');
        page.className = `composer-page ${format}`;

        document.getElementById('compNorthBox').style.display = showNorth ? 'block' : 'none';
        document.getElementById('compScaleBox').style.display = showScale ? 'block' : 'none';
        document.getElementById('compLegendBox').style.display = showLegend ? 'block' : 'none';

        // Calcola scala approssimativa in base allo zoom di MapLibre
        const zoom = map.getZoom();
        const kmVal = Math.max(0.5, (100 / Math.pow(2, zoom - 10))).toFixed(1);
        document.getElementById('scaleBarText').textContent = `0 — ${kmVal} km`;

        // Popola la legenda con i pin attivi visibili
        const legendContainer = document.getElementById('composerLegendItems');
        legendContainer.innerHTML = "";
        Object.values(places).forEach(p => {
            const row = document.createElement('div');
            row.className = 'legend-item-row';
            row.innerHTML = `<span>${p.icon}</span> <span>${p.name}</span>`;
            legendContainer.appendChild(row);
        });

        // Cattura screenshot della mappa tramite MapLibre canvas buffer
        map.once('render', () => {
            const snapshotUrl = map.getCanvas().toDataURL('image/png');
            document.getElementById('composerMapSnapshot').src = snapshotUrl;
            printComposerOverlay.classList.remove('hidden');
        });
        map.triggerRepaint();
    });
}

if (closeComposerBtn) {
    closeComposerBtn.addEventListener('click', () => printComposerOverlay.classList.add('hidden'));
}

if (downloadImageBtn) {
    downloadImageBtn.addEventListener('click', () => {
        const composerPage = document.getElementById('composerPage');
        html2canvas(composerPage, { scale: 2, useCORS: true }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'my_world_map_layout.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            link.remove();
        });
    });
}

// Logica Drag & Drop per gli elementi GIS nel Composer
let activeDraggable = null;
let dragOffsetX = 0, dragOffsetY = 0;

document.querySelectorAll('.composer-element').forEach(el => {
    el.addEventListener('mousedown', (e) => {
        activeDraggable = el;
        const rect = el.getBoundingClientRect();
        dragOffsetX = e.clientX - rect.left;
        dragOffsetY = e.clientY - rect.top;
        e.stopPropagation();
    });
});

document.addEventListener('mousemove', (e) => {
    if (!activeDraggable) return;
    const parentRect = document.getElementById('composerPage').getBoundingClientRect();
    let newX = e.clientX - parentRect.left - dragOffsetX;
    let newY = e.clientY - parentRect.top - dragOffsetY;
    
    activeDraggable.style.left = `${newX}px`;
    activeDraggable.style.top = `${newY}px`;
    activeDraggable.style.right = 'auto';
    activeDraggable.style.bottom = 'auto';
});

document.addEventListener('mouseup', () => {
    activeDraggable = null;
});

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
        const visitedSugg = document.getElementById("visitedCitySuggestions");
        if (mainSugg) mainSugg.classList.add("hidden");
        if (visitedSugg) visitedSugg.classList.add("hidden");
    }
});

function setupCityAutocomplete(inputId, suggestionsId, isMain) {
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
    if (!mainList || !visitedList) return;
    
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
    el.style.setProperty('--marker-color', userMapStyle.markerColor || '#3b82f6');
    
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
    activeMarkers.forEach(m => m.remove()); 
    activeMarkers = [];
    Object.keys(places).forEach(id => {
        const item = places[id];
        
        if (activeFilterCategory !== "ALL") {
            if (activeFilterCategory === "✈️") {
                if (item.icon !== "✈️" && !item.category.toLowerCase().includes("aeroporto") && !item.category.toLowerCase().includes("viaggio")) return;
            } else if (!item.category.includes(activeFilterCategory) && item.icon !== activeFilterCategory) {
                return;
            }
        }

        const el = createMarkerElement(item);
        el.addEventListener('click', (e) => { e.stopPropagation(); removeTempSearchMarker(); openPlace(id); });
        activeMarkers.push(new maplibregl.Marker({ element: el }).setLngLat([item.lng, item.lat]).addTo(map));
    });
}

function loadProfileUI() {
    const nameInput = document.getElementById('profileNameInput');
    if (nameInput) nameInput.value = userProfile.name || "";
    
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = userProfile.language || "it";

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
    updateProfileStats();
}

function updateProfileStats() { 
    const lang = userProfile.language || 'it';
    const dict = translations[lang] || translations.it;

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

const profileAvatarFileInput = document.getElementById('profileAvatarFileInput');
if (profileAvatarFileInput) {
    profileAvatarFileInput.addEventListener('change', (e) => {
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
        const nameInput = document.getElementById("profileNameInput");
        const langSelect = document.getElementById("languageSelect");
        
        userProfile.name = nameInput ? (nameInput.value.trim() || "Utente") : "Utente";
        if (langSelect) userProfile.language = langSelect.value;
        
        saveState(); 
        loadProfileUI(); 
        applyLanguageTranslations();
        
        document.getElementById("profileModal").classList.remove("open");
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

const editPlaceBtn = document.getElementById("editPlaceBtn");
if (editPlaceBtn) {
    editPlaceBtn.addEventListener("click", () => {
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
    addOptionButton.addEventListener("click", () => document.getElementById("mapPicker").classList.remove("hidden"));
}

const cancelPick = document.getElementById("cancelPick");
if (cancelPick) {
    cancelPick.addEventListener("click", () => { 
        document.getElementById("mapPicker").classList.add("hidden"); 
        removeTempSearchMarker(); 
    });
}

const confirmPick = document.getElementById("confirmPick");
if (confirmPick) {
    confirmPick.addEventListener("click", () => {
        const center = map.getCenter(); 
        pendingCoords = { lat: center.lat, lng: center.lng }; 
        isEditingPlace = false;
        const lang = userProfile.language || 'it';
        const dict = translations[lang] || translations.it;
        document.getElementById("modalTitle").textContent = dict.newPinTitle;
        document.getElementById("placeInput").value = ""; 
        document.getElementById("customEmojiInput").value = "";
        document.getElementById("tagsInput").value = ""; 
        document.getElementById("noteInput").value = ""; 
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
                lng: pendingCoords.lng 
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

const helpButton = document.getElementById("helpButton");
const closeHelp = document.getElementById("closeHelp");
if (helpButton) helpButton.addEventListener("click", () => document.getElementById("helpModal").classList.add("open"));
if (closeHelp) closeHelp.addEventListener("click", () => document.getElementById("helpModal").classList.remove("open"));

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
