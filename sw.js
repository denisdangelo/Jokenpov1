/**
 * Service worker
 * @author Elen Grecco
 */

//Instalação (cache "armazenamento local")
self.addEventListener('install', (event)=> {
    event.waitUntil(
        caches.open('static')
        .then((cache)=>{
                cache.add('./jokenpov1/')
                cache.add('./jokenpov1/index.html')
                cache.add('./jokenpov1/style.css')
                cache.add('./jokenpov1/app.js')
                cache.add('./jokenpov1/img/logo.png')
                cache.add('./jokenpov1/img/pedra.png')
                cache.add('./jokenpov1/img/papel.png')
                cache.add('./jokenpov1/img/tesoura.png')
                cache.add('./jokenpov1/img/pc.png')
                cache.add('./jokenpov1/img/pcpedra.png')
                cache.add('./jokenpov1/img/pcpapel.png')
                cache.add('./jokenpov1/img/pctesoura.png')
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