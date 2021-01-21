ahora desde jdownloader nos se pueden estrar todos los videos de una lista los limita a 10 para eso cree este script 

~~~javascript

$$(`a.yt-simple-endpoint.ytd-playlist-video-renderer`).forEach( x => console.log(x.href))

~~~
