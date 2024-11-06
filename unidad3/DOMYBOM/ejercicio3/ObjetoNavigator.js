// 3. Objeto navigator
// Ejercicio:
// 1. Mostrar el nombre del navegador, el idioma y la plataforma en la que se
// está ejecutando la página.
function mostrarInfoNavegador() {
    let nombre = navigator.appName;
    let lenguaje = navigator.language;
    let plataforma = navigator.platform;
    let info = `<p>${nombre}</p><p>${lenguaje}</p><p>${plataforma}</p>`
    document.getElementById("infoNavegador").innerHTML = info;
}