const o = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
}, r = [
  "/_app/immutable/start-eb195c9f.js",
  "/_app/immutable/components/pages/_layout.svelte-55f50daa.js",
  "/_app/immutable/assets/_layout-9535670c.css",
  "/_app/immutable/components/error.svelte-5f80a1b6.js",
  "/_app/immutable/components/pages/_page.svelte-a01dc594.js",
  "/_app/immutable/assets/_page-592187b6.css",
  "/_app/immutable/components/pages/about/_page.svelte-12ae5158.js",
  "/_app/immutable/assets/_page-bd93f107.css",
  "/_app/immutable/components/pages/howto/_page.svelte-75259b17.js",
  "/_app/immutable/chunks/singletons-c00e543a.js",
  "/_app/immutable/chunks/index-c07530e9.js",
  "/_app/immutable/chunks/0-14edbcd9.js",
  "/_app/immutable/chunks/1-d8100079.js",
  "/_app/immutable/chunks/2-9b1d9ead.js",
  "/_app/immutable/chunks/3-09703531.js",
  "/_app/immutable/chunks/4-9b85214d.js"
], l = [
  "/facebook.png",
  "/favicon.png",
  "/favicon_192.png",
  "/favicon_32.png",
  "/favicon_48.png",
  "/favicon_512.png",
  "/favicon_96.png",
  "/instagram.png",
  "/manifest.json",
  "/menu_icon.svg",
  "/style.css",
  "/twitter.png",
  "/whatsapp.png"
], a = self, p = `cache${o}`, i = r.concat(l), h = new Set(i);
a.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((s) => s.addAll(i)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== p && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function u(e) {
  const s = await caches.open(`offline${o}`);
  try {
    const t = await fetch(e);
    return s.put(e, t.clone()), t;
  } catch (t) {
    const n = await s.match(e);
    if (n)
      return n;
    throw t;
  }
}
a.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, c = s.host === self.location.host && h.has(s.pathname), m = e.request.cache === "only-if-cached" && !c;
  t && !n && !m && e.respondWith(
    (async () => c && await caches.match(e.request) || u(e.request))()
  );
});
