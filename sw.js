// Offline cache for the trip app. Bump VERSION after editing index.html.
const VERSION="asia26-v21";
const TILES="asia26-tiles";
const CORE=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"];
const CACHE_HOSTS=["basemaps.cartocdn.com","cdn.jsdelivr.net","fonts.googleapis.com","fonts.gstatic.com"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION&&k!==TILES).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  const same=u.origin===self.location.origin;
  if(u.pathname.includes("currency-api"))return; // live rates: never serve from cache
  if(!same&&!CACHE_HOSTS.some(h=>u.hostname.endsWith(h)))return; // let sync and rate requests go straight to the network
  const isTile=u.hostname.endsWith("basemaps.cartocdn.com");
  e.respondWith((async()=>{
    const hit=await caches.match(e.request,{ignoreSearch:same});
    const c=await caches.open(isTile?TILES:VERSION);
    const net=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==="opaque"))c.put(e.request,r.clone());return r}).catch(()=>hit);
    return hit||net;
  })());
});
