let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (esValido(nombreAmigo)) {
        listaAmigos.push(nombreAmigo);
        console.log(`Lista de amigos: ${listaAmigos}`);
    } else {
        alert("Debe ingresar un nombre");
    }
    // limpiarInput() a implementar
}

function sortearAmigo() {
    let indiceRandom = generarIndiceRandom();
    let nombreSorteado = listaAmigos[indiceRandom];
    asignarTextoElementoHTML("resultado", nombreSorteado);
}

function esValido(nombre) {
    return !(nombre === "");
}

function generarIndiceRandom() {
    return Math.floor(Math.random()*listaAmigos.length);
}

function asignarTextoElementoHTML(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}