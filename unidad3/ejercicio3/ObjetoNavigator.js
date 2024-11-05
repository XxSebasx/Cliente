function mostrarInfoNavegador() {
    let nombre = navigator.appName;
    let lenguaje = navigator.language;
    let plataforma = navigator.platform;
    let info = `<p>${nombre}</p><p>${lenguaje}</p><p>${plataforma}</p>`
    document.getElementById("infoNavegador").innerHTML = info;
}