let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if (esValido(nombreAmigo)) {
        listaAmigos.push(nombreAmigo);
    } else {
        alert("Debe ingresar un nombre");
    }
}

function sortearAmigo() {
    let indiceRandom = generarIndiceRandom(); // implementar
    console.log(listaAmigos[indiceRandom]); // borrar
    let nombreSorteado = listaAmigos[indiceRandom];
    console.log(listaAmigos[indiceRandom]); // borrar
    asignarTextoElementoHTML("", nombreSorteado); // implementar
}

function esValido(nombre) {
    return !(nombre === "");
}