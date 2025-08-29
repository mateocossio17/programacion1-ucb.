function mostrarNombre() {
    const nombre = document.getElementById("nombre").value;
    const resultado = document.getElementById("resultado");
        if (nombre.trim() === "") {
            resultado.textContent = "Por favor, escribe tu nombre.";
        } else {
            resultado.textContent = "Hola, " + nombre + " 👋";
         }
        }
var lista = [];

var lista = [];
function InsertarLista(){
    var ValorAleatorio = Math.floor(Math.random() * 10);
    const resultado = document.getElementById("resultado");

    lista.push(ValorAleatorio);
    resultado.textContent = lista.toString();
}
function EliminarLista() {
    lista = [];
    document.getElementById("resultado").textContent = lista.toString();
}