//Variables

var a // Declarando
var a = 'aa' // ReDeclarando

var b = 'b' // Declaramos y asignamos
b = 'bb' // ReAsignacion



// Global Scope
var fruit = "Apple " // Global

function bestFruit() {
    console.log(fruit);
}


bestFruit()

console.log('aaa');


// Otra forma de delcarar una variable global:

function countries() {
    var country = 'Colombia'; // al no poner un pregfijo, la estamos declarando como global
    console.log(country);
}


countries();
console.log(country); // con este clg tambien podriamos acceder a la variable "Local" de la funcion, para ello tendriamos que usar var let o const