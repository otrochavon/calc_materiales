/* Service worker de Calculadora de materiales
   Guarda una copia de la app en el teléfono para que abra sin internet.
   Estrategia: sirve primero desde el caché (instantáneo) y, si hay red,
   baja la versión nueva en segundo plano para la próxima vez.
   Al cambiar la app, subir este archivo con VERSION+1. */
const VERSION = 1;
const CACHE = "materiales-v" + VERSION;
const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", ev => {
  ev.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ARCHIVOS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", ev => {
  ev.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", ev => {
  const req = ev.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  ev.respondWith(
    caches.match(req, { ignoreSearch: true }).then(cacheado => {
      const red = fetch(req).then(resp => {
        if (resp && resp.status === 200 && resp.type === "basic") {
          const copia = resp.clone();
          caches.open(CACHE).then(c => c.put(req, copia));
        }
        return resp;
      }).catch(() => cacheado);              // sin señal: sigue andando con la copia

      return cacheado || red;
    })
  );
});
