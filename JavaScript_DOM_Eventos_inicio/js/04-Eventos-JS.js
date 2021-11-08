// Eventos en Js
// .document -> pertenece a Windows

//
console.log(1); //Fuera del evento, se va a ejecutar inmediatamente

// La forma de registrar un evento, con el evento -> ".addEventListener"

window.addEventListener("load", function () {
  //Load, espera que se haya cargado totalmente la ventana.
  //   Esta funcion luego del evento se conoce como -> Coldbacks
  //   Éste evento espera a que se descargue el Js, Css, html y todos los archivos que dependen de él.
  console.log(8);
});
// Otra Sintaxis
window.onload = function () {
  console.log(10);
};

console.log(2);
// Tercer evento va a estar asociado a "document"
document.addEventListener("DOMContentLoaded", function () {
  //Este Evento solo espera que el Documento HTML se descargue sin Importar lo demás
  //   No espera Css e imagenes
  // Vamos a utilizar más éste evento, es más rápido
  console.log(22);
});

console.log(5); //Fuera del evento, se va a ejecutar inmediatamente

// Tambien pueden ser Funciones a parte
// Si son pocas lineas usamos el Coldbcks

window.addEventListener("DOMContentLoaded", imprimir); //No requiere poner el parentesis

function imprimir() {
  console.log("Con una Funcion a Parte");
}

// Evento de Scroll

window.addEventListener("scroll", function () {
  //Contará las veces que hago Scroll
  console.log("Scrolling.....");
});
