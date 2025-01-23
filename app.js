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

}

function esValido(nombre) {
    return !(nombre === "");
}