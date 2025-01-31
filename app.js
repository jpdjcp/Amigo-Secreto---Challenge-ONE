let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Debe ingresar un nombre");
        return;
    } else if (listaAmigos.includes(nombreAmigo)) {
        alert("No puede repetir nombres");
        limpiarInput();
        return;
    } else {
        listaAmigos.push(nombreAmigo);
        mostrarEnListaHTML(nombreAmigo);
        console.log(`Lista de amigos: ${listaAmigos}`);
        limpiarInput();
        return;
    }
}

function mostrarEnListaHTML(nombre) {
    let elementoLista = document.createElement("li");
    elementoLista.innerHTML = nombre;
    document.getElementById("listaAmigos").appendChild(elementoLista);
}

function sortearAmigo() {
    let indiceRandom = generarIndiceRandom();
    let nombreSorteado = listaAmigos[indiceRandom];
    asignarTextoElementoHTML("resultado", nombreSorteado);
}

function generarIndiceRandom() {
    return Math.floor(Math.random()*listaAmigos.length);
}

function asignarTextoElementoHTML(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}