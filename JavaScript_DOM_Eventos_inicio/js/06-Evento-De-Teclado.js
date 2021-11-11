// Evento de los Inputs y TextArea
// Validar o Leer lo que el usuario está escribiendo en los campos

// Creamos un objeto debe tener los mismos datos que el formulario, para poder guardar lo que escribimos en él
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto); //Con el Evento "Input", leemos en tiempo Real!
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// Evitamos duplicar codigo creando una funcion y luego usarla dentro de cada evento
function leerTexto(evento) {
  // console.log(evento.target.value);
  // Vamos a ir asignando lo que escribimos en su campo correspondiente
  datos[evento.target.id] = evento.target.value; //Con este codigo vamos llenando los campos, tiene que ser el mismo nombre, las llaves del objeto con los id del formulario

  console.log(datos);
}
