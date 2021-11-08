// QuerySelectorAll
//Retorna de 0 a todos los que concuerden con el selector tipo CSS que le pasemos , ya sea clase o Id
// Para acceder a un elemento en especifico, usamos una sintaxis similar a los arreglos -> console.log(enlaces[0]): accede a la posición "0"
// Es conveniente crear una variable para poder trabajar, mejor practica.

const enlaces = document.querySelectorAll(".navegacion a"); //Creamos la variable para poder trabajarla mejor, y le pasamos la clase
console.log(enlaces);
// Mostramos solo el primer enlace, seleccionando el elemento similar a un Array
console.log(enlaces[0]);
// Pdemos modificar el texto del Enlace seleccionando la posicion y luego modificandola
enlaces[0].textContent = "Este es el nuevo Nombre";

// Tambien podemos modificar la Direccion del enlace :

// enlaces[0].href = "https://www.google.com.ar/";

// Agregamos clases :

enlaces[0].classList.add("nueva-clase"); //Agregamos una clase
enlaces[0].classList.remove("nueva-clase"); //Eliminamos una Clase

//

// GetElementById
// Es similar a a QuerySelector y QuerySelectorAll, se pueden realizar las mismas operaciones
// Es la forma anterior de hacerlo, Ahora se utiliza más QuerySelector - QuerySelectorAll

const heading2 = document.getElementById("heading"); //Le pasamos el ID que deseamos seleccionar
console.log(heading2);
