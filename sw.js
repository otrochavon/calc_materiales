/* Service worker de Calculadora de materiales
   Guarda una copia de la app en el teléfono para que abra sin internet.
   Estrategia: sirve primero desde el caché (instantáneo) y, si hay red,
   baja la versión nueva en segundo plano para la próxima vez.
   VERSION tiene que ser SIEMPRE el mismo número que APP_VER en index.html:
   el que se ve arriba a la derecha del título. */
const VERSION = "3.6";
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

  /* Si la dirección trae ?nueva, se saltea la copia guardada y va derecho a la red.
     Sirve para forzar la actualización desde el navegador. */
  if (new URL(req.url).searchParams.has("nueva")) {
    ev.respondWith(
      fetch(req, { cache: "reload" })
        .then(resp => { caches.open(CACHE).then(c => c.put(req, resp.clone())); return resp; })
        .catch(() => caches.match(req, { ignoreSearch: true }))
    );
    return;
  }

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
