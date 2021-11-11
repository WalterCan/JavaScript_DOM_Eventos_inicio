// Evento de Submit en formularios
// Cuando utilizar el evento de click y cuando el de submit
// Siempre en un Formulario debemos usar un "Submit" -> y debe tener a fuerza un boton "submit"
// El click puede estar asociado a una imagen, boton, etc.(Cualquier elemento)

//
// Evento de "Submit"

const formulario = document.querySelector(".formulario"); //Seleccionamos la clase correspondiente Formulario.
formulario.addEventListener("submit", function (evento) {
  //Pasamos el evento "Submit" -> siempre debemos tener un submit en el formulario.
  evento.preventDefault();
  console.log("Enviando Formulario...");
});
