importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'assets',
    new workbox.strategies.CacheFirst()
);