// Boonesboro Lab Agent — service worker
// Caches the app shell for install + offline. Never touches the agent API (POST /.netlify/*).
const CACHE = "bt3-shell-v2";
const SHELL = [
  "/",
  "/index.html",
  "/allen-logo.png",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/manifest.webmanifest",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;                    // agent POSTs go straight to network
  const url = new URL(req.url);
  if (url.pathname.startsWith("/.netlify/")) return;   // functions always hit network
  if (req.mode === "navigate") {
    // network-first for the page so techs always get the latest build; offline falls back to cache
    e.respondWith(fetch(req).catch(() => caches.match("/index.html")));
    return;
  }
  // cache-first for static shell assets
  e.respondWith(caches.match(req).then((r) => r || fetch(req)));
});
