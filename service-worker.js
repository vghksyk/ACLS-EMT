const CACHE='emt-code-leader-v2.6';
const ASSETS=['./','./index.html','./manifest.json','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('emt-code-leader-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const req=event.request;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));return resp;}).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(req,copy));return resp;})));
});
