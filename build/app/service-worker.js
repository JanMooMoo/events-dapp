"use strict";var precacheConfig=[["./index.html","44e8bc6338662ce4c8d5a2826b1f0a44"],["./static/css/main.e5bf556f.css","3331759c1a8c4f6d3cf2fecb8a2d93a6"],["./static/media/fa-brands-400.088a34f7.eot","088a34f78f530102fd9661173b4a4f26"],["./static/media/fa-brands-400.273dc9bf.ttf","273dc9bf9778fd37fa61357645d46a28"],["./static/media/fa-brands-400.822d94f1.woff2","822d94f19fe57477865209e1242a3c63"],["./static/media/fa-brands-400.d7229311.svg","d72293118cda50ec50c39957d9d836d0"],["./static/media/fa-brands-400.f4920c94.woff","f4920c94c0861c537f72ba36590f6362"],["./static/media/fa-regular-400.3ac49cb3.eot","3ac49cb33f43a6471f21ab3df40d1b1e"],["./static/media/fa-regular-400.9efb8697.woff2","9efb86976bd53e159166c12365f61e25"],["./static/media/fa-regular-400.a57bcf76.woff","a57bcf76c178aee452db7a57b75509b6"],["./static/media/fa-regular-400.d2e53334.svg","d2e53334c22a9a4937bc26e84b36e1e0"],["./static/media/fa-regular-400.ece54318.ttf","ece54318791c51b52dfdc689efdb6271"],["./static/media/fa-solid-900.2aa6edf8.ttf","2aa6edf8f296a43b32df35f330b7c81c"],["./static/media/fa-solid-900.7a5de9b0.svg","7a5de9b08012e4da40504f2cf126a351"],["./static/media/fa-solid-900.7fb1cdd9.eot","7fb1cdd9c3b889161216a13267b55fe2"],["./static/media/fa-solid-900.93f28454.woff","93f284548b42ab76fe3fd03a9d3a2180"],["./static/media/fa-solid-900.f6121be5.woff2","f6121be597a72928f54e7ab5b95512a1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});