self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('student-mgr-v1').then((cache) => {
      return cache.addAll(['./Student-Manger.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
