const CACHE_NAME = 'friato-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o Service Worker e salva os arquivos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Responde com o cache quando estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
