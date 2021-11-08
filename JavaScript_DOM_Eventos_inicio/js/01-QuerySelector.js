//DOM Scripting
// Seleecionar contenido, Hay tres formas de hacerlo
// Siempre se usa un ID para referirnos a un elemento del HTML
// Todos los selectores deben comenzar con "document."
// Si hay un error en el selector, la consola va a mostrar el mensaje :  "null"
// Todo lo relacionado en HTML puede ser modificado por JS

// QuerySelector
//Va a Retornar, ya sea ninguno o hasta un elemnto que concuerde con el selector que estamos escribiendo
// Son selectores muy similares a los de CSS3
const heading = document.querySelector(".header__texto h2");
// Podemos modificar el HTML
heading.textContent = "Nuevo Texto";
// Podemos Agregar Clases:
heading.classList.add("nueva-clase");
console.log(heading);

//

// QuerySelectorAll
//
//

// getElemenById (Esta es la más antigua, pero hay muchos ejemplos con éste codigo)
