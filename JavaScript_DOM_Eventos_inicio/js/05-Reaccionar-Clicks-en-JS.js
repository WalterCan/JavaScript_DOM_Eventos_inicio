// Reacción a un evento de click
// Vamos a Seleccionar un elemento Del HTML y Registrarle un Evento

//

const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function (evento) {
  //Pasamos como parametro evento, hace referencia al evento que está pasando
  console.log(evento);
  evento.preventDefault();
  console.log("Enviando Formulario");
});

// Cuando presionamos en el submit, su funcion por default es enviar esa información.
