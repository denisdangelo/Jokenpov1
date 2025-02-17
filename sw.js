/**
 * Service worker
 * @author Elen Grecco
 */

//Instalação (cache "armazenamento local")
self.addEventListener('install', (event)=> {
    event.waitUntil(
        caches.open('static')
        .then((cache)=>{
                cache.add('./jokenko/')
                cache.add('./jokenko/index.html')
                cache.add('./jokenko/style.css')
                cache.add('./jokenko/app.js')
                cache.add('./jokenko/img/logo.png')
                cache.add('./jokenko/img/pedra.png')
                cache.add('./jokenko/img/papel.png')
                cache.add('./jokenko/img/tesoura.png')
                cache.add('./jokenko/img/pc.png')
                cache.add('./jokenko/img/pcpedra.png')
                cache.add('./jokenko/img/pcpapel.png')
                cache.add('./jokenko/img/pctesoura.png')
        })
    )
})



//Ativação
self.addEventListener('activate', (event)=> {
    console.log("Ativando o service worker...", event)
    return self.clients.claim()
    
})



//Interceptação (solicitações https servindo em cache quando off-line)
self.addEventListener('fetch', (event)=> {
    event.respondWith(
        cache.match(event.request)
        .then((response)=>{
            if (response) {
                return response
            } else {
                return fetch(event.request)
            }
        })
    )
    
})