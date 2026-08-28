const CACHE='emt-code-leader-v2.4.1';
const CORE=['./manifest.json','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('emt-code-leader-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  const isNav=e.request.mode==='navigate'||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/index-v231.html');
  if(isNav){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));return resp;}).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;})));
});
