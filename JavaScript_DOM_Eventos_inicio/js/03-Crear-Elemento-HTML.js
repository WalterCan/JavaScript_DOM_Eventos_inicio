// Crear Elemento HTML con JS
//La Funcion -> CreateElement(), va a crear un nuevo elemento

// Generar un nuevo Enlace con Js

// Creamos una nueva Variable

const nuevoEnlace = document.createElement("A"); //Creamos un nuevo elemento, pasamos el elemento en Mayusculas

console.log(nuevoEnlace);

// Agregamos los atributos del enlace

// Agregamos el enlace

nuevoEnlace.href = "nuevo-enlace.html";

// Agregar el Texto

nuevoEnlace.textContent = "Nuevo Enlace";
// Agregar la Clase

nuevoEnlace.classList.add("navegacion__enlace");
console.log(nuevoEnlace);

// Agregarlo al Documento HTML

const navegacion = document.querySelector(".navegacion"); //Seleccionamos la clase de Navegacion, y la colocamos en una Variable, asi podemos agregar el nuevo Enlace
// Usamos la referencia a la navegacion
// Usamos la Funcion -> appendChild (Para agregar un elemento e incertarla en otro lugar)

navegacion.appendChild(nuevoEnlace); //Agregamos el nuevo elemento.
