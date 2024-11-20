
let enlaces = document.body.getElementsByTagName("a");
console.log( enlaces.length + " elementos <a>")
console.log(enlaces[enlaces.length - 2].href)

let nEnlaces = 0;
for (let i = 0; i < enlaces.length; i++) {
    if(enlaces[i].href === "http://prueba/"){
        nEnlaces++;
    }
}

console.log(nEnlaces + " enlaces apuntan a http://prueba/")

console.log(document.body.getElementsByTagName("p")[2].getElementsByTagName("a").length)