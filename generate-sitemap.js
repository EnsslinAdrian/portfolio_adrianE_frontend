// generate-sitemap.js
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// === CONFIG ===
const hostname = 'https://adrianensslin.de'; // <-- ohne / am Ende
const routesFile = path.join(__dirname, 'src/app/app.routes.ts');

// === 1. Routes auslesen ===
const routesContent = fs.readFileSync(routesFile, 'utf8');

// Regex um alle Angular-Routen zu finden
const routeRegex = /path:\s*'([^']*)'/g;
const links = [];
let match;
while ((match = routeRegex.exec(routesContent)) !== null) {
  const url = match[1] ? `/${match[1]}` : '/';
  links.push({ url, changefreq: 'monthly', priority: url === '/' ? 1.0 : 0.8 });
}

// === 2. Output-Ordner korrekt erkennen ===
const distPath = path.join(__dirname, 'dist');
const folders = fs.readdirSync(distPath);
const angularFolder = folders.find(f => fs.statSync(path.join(distPath, f)).isDirectory());

// Wenn kein Ordner gefunden -> Error
if (!angularFolder) {
  console.error('❌ Kein Build-Ordner unter ./dist gefunden! Hast du "ng build" ausgeführt?');
  process.exit(1);
}

const outputDir = path.join(distPath, angularFolder, 'browser');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'sitemap.xml');

// === 3. Sitemap erzeugen ===
const sitemap = new SitemapStream({ hostname });
const writeStream = fs.createWriteStream(outputPath);

sitemap.pipe(writeStream);
links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log(`✅ Sitemap erfolgreich erstellt unter: ${outputPath}`))
  .catch(err => {
    console.error('❌ Fehler beim Erstellen der Sitemap:', err);
  });
