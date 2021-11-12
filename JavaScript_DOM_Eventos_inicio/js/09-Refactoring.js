// Refactoring
// Refactorando codigo
// Primero el codigo debe funcionar, sin importar si duplicamos codigo y  luego refactorizamos para hacerlo más compacto.
// Refactorizamos el archivo 08-Validacion de formulario

//

// Objeto Global
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

// Traemos los elementos del HTML con QuerySelector y le asignamos una variable
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

// Agregamos los eventos

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // Validamos el Formulario (Extraemos los valores del objeto)

  const { nombre, email, mensaje } = datos; //Extraemos los valores y creamos las variables al mismo tiempo
  if (nombre === "" || email === "" || mensaje == "") {
    //Validamos que los datos no estén vacios para poder enviar el formulario

    // Creamos una Funcion que va a mostrar el error
    mostrarAlerta("Todos los Campos Son Obligarios", true); //Pasamos un Segundo Argumento.

    return; //Corta la Ejecucion del Codigo en caso de que la condicion se cumple.Previene la ejecución del codigo
  }

  // Creando ALERTA DE CARGA CORRECTA

  mostrarAlerta("Mensaje Enviado Correctamente");
});

// Creamos Funciones

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
}

// ---REFACTORIZAMOS LAS FUNCIONES

function mostrarAlerta(mensaje, error = null) {
  //   Vamos a Crear HTML Y Agregarlo
  const alerta = document.createElement("P"); //Creamos HTML
  alerta.textContent = mensaje; //Le pasamos el mensaje al Parrafo
  if (error) {
    alerta.classList.add("error"); //Agregamos una Clase para poder darle estilo en el CSS
  } else {
    alerta.classList.add("correcto"); //Agregamos una Clase para poder darle estilo en el CSS
  }
  formulario.appendChild(alerta);
  //desaparezca la Alerta luego de 5 Segundos
  setTimeout(() => {
    alerta.remove();
  }, 3000);
}
