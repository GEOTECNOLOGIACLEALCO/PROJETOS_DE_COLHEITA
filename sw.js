
    const CACHE_NAME = 'clealco-v2';
    const assets = ['./', './index.html', './divisas.json', './labels.json', './manifesto.json'];
    self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets))); });
    self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))); });
    