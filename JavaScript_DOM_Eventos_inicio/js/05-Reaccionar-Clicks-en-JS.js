// Reacción a un evento de click
// Vamos a Seleccionar un elemento Del HTML y Registrarle un Evento

//

const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function (evento) {
  //pasamos el parametro de Evento
  console.log(evento);
  evento.preventDefault(); //Previene la accion por Default -> Es util para validar un Formulario (Que todos los campos esten llenos para enviar el formulario)
  console.log("Enviando Formulario");
});
// Cuando presionamos en el submit, su funcion por default es enviar esa información.
