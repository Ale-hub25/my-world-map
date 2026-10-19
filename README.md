# My World Map

My World Map è una web app client-side per creare mappe personali con pin, layout di stampa (GIS composer), profilo utente e personalizzazioni visive.

Questo repository è una semplice SPA (HTML/CSS/JavaScript) che usa MapLibre GL JS per il rendering delle mappe, html2canvas per l'esportazione delle immagini e il servizio Nominatim (OpenStreetMap) per la ricerca/geocoding.

Principali file:
- index.html — entry page e markup dell'interfaccia
- script.js  — logica client-side (mappa, UI, persistenza localStorage)
- style.css  — stili dell'interfaccia

Come eseguire in locale
1. Clona il repository:
   git clone https://github.com/Ale-hub25/my-world-map.git
   cd my-world-map

2. Avvia un server statico dalla cartella del progetto (NON aprire i file con file://):
   - Con Python 3 (consigliato):
     python -m http.server 8000

   - Con npx http-server (Node.js):
     npx http-server -p 8000

3. Apri il browser su:
   http://localhost:8000/index.html

Attenzione CORS e snapshot della mappa
- L'app cattura lo snapshot del canvas della mappa (map.getCanvas().toDataURL) e usa html2canvas per esportare PNG. Se i tiles/risorse provengono da provider esterni che non espongono header CORS, la canvas risulterà "tainted" e la cattura/esportazione non funzionerà.
- Se riscontri problemi con l'esportazione o con le immagini sulla mappa, verifica che il tile server e le risorse esterne permettano richieste cross-origin (CORS). Per una soluzione robusta in produzione conviene ospitare uno style/tiles con CORS abilitato o usare un proxy server.

Uso di Nominatim (OpenStreetMap)
- L'app utilizza le API pubbliche di Nominatim per la ricerca/autocomplete. Le API pubbliche hanno limiti d'uso e politiche di utilizzo; per un uso intensivo installa un'istanza privata di Nominatim oppure usa un servizio geocoding con contratto commerciale.
- Questa branch include una piccola cache lato sessione per ridurre richieste duplicate nelle ricerche durante la sessione del browser.

Cosa ho modificato in questa branch
- README.md con istruzioni e avvisi CORS/Nominatim.
- Correzione in script.js:
  - aggiunta di una cache semplice per le ricerche Nominatim (sessione)
  - aggiunta parametro accept-language nelle query Nominatim
  - correzione checkbox ID errato nel print composer (chkNorthArrow)
  - sostituzione del setTimeout dopo map.setStyle con un handler su "style.load" per applicare colori e layers in modo robusto

Prossimi passi
- Se vuoi, posso aprire una Pull Request (PR) con questi cambiamenti, applicare ulteriori refactor (modularizzazione), o gestire il merge sul ramo principale e il deploy su GitHub Pages.

Domande utili
- Vuoi che prepari anche dei test di base o estragga la logica in moduli per manutenzione futura?
