// عند تثبيت الـService Worker
self.addEventListener('install', event => {
  console.log('Service Worker installed!');
});

// عند طلب أي ملف من الموقع
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
