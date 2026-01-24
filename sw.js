const CACHE_NAME = 'student-mgr-v1';
const ASSETS = [
  '/Student-Manger/',
  '/Student-Manger/courses.html',
  '/Student-Manger/Student-Manger.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
