self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('abnormal-battle-cache').then((cache) => {
      return cache.addAll(['./index.html', './av-min.js', './font-awesome.min.css']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
