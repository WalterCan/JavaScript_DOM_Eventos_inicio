// Validacion de Formulario

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
    mostrarError("Todos los Campos Son Obligarios");

    return; //Corta la Ejecucion del Codigo en caso de que la condicion se cumple.Previene la ejecución del codigo
  }

  // Creando ALERTA DE CARGA CORRECTA

  mostrarMensaje("Mensaje Enviado Correctamente");
});

// Creamos Funciones

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
  console.log(datos);
}

// Muestra un Error en Pantalla

function mostrarError(mensaje) {
  //   Vamos a Crear HTML Y Agregarlo
  const error = document.createElement("P"); //Creamos HTML
  error.textContent = mensaje; //Le pasamos el mensaje al Parrafo
  error.classList.add("error"); //Agregamos una Clase para poder darle estilo en el CSS
  formulario.appendChild(error); //Lo Agregamos al HTML
  //desaparezca la Alerta luego de 5 Segundos
  setTimeout(() => {
    error.remove();
  }, 3000);
}

// Carga Alerta de Carga Correcta

function mostrarMensaje(mensaje) {
  const correcto = document.createElement("P");
  correcto.textContent = mensaje;
  correcto.classList.add("correcto");
  formulario.appendChild(correcto);
  setTimeout(() => {
    correcto.remove();
  }, 3000);
}
