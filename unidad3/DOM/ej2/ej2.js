
let enlaces = document.body.getElementsByTagName("a");
console.log( enlaces.length + " elementos <a>")
console.log(document.body.getElementsByTagName("a").item(6).href)

let nEnlaces = 0;
for (let i = 0; i < enlaces.length; i++) {
    console.log(enlaces.item(i).href)
    if(enlaces.item(i) == "http://prueba/"){
        nEnlaces++;
    }
}

console.log(nEnlaces + " enlaces apuntan a http://prueba/")

console.log(document.body.getElementsByTagName("p").item(1).getElementsByTagName("a").length)