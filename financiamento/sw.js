const CACHE_NAME = 'financiamento-v3';

const ASSETS = [
  '/ferramentas/financiamento/',
  '/ferramentas/financiamento/index.html',
  '/ferramentas/financiamento/manifest.json',
  '/ferramentas/financiamento/icon-192.png',
  '/ferramentas/financiamento/icon-512.png',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  '/ferramentas/assets/base.css',
  '/ferramentas/assets/theme.js',
];

// Install: pre-cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first, so updates show up right away; the cache only serves offline
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request).then(response => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() =>
      caches.match(event.request).then(cached =>
        cached || (event.request.mode === 'navigate'
          ? caches.match('/ferramentas/financiamento/')
          : undefined))
    )
  );
});
