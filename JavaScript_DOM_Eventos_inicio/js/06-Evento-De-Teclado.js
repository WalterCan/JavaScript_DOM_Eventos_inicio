// Evento de los Inputs y TextArea
// Validar o Leer lo que el usuario está escribiendo en los campos

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// Evitamos duplicar codigo creando una funcion y luego usarla dentro de cada evento
function leerTexto(evento) {
  console.log(evento.target.value);
}
