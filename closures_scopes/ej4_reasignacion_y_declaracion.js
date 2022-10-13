var firstName;  // Undefined
firstName = 'Oscar' //
console.log(firstName);

var lastName = "David";  // declarar / asignar
lastName = 'Ana'; //
console.log(lastName);

var secondName = 'David'; // declarar / asignar
var secondName = 'Ana'; // Reasignando | !! Nos esta dejado vovler a usar var para declararlo !!
console.log(secondName) 
 

// Let
let fruit = 'Apple ' // Declarar y asignar
fruit = 'Kiwi' // Reasignar 

let fruit = 'Bannana'; // A diferencia de var, no nos deha vovler a declarar la variable


// Const 
//(Tiene unas reglas mas robustas, ya que en JS SI que existen las constantes)
const animal = 'dog' // Declara y se Asigna
animal = 'cat'; // 

/* 
NOTA:
Las constantes en JS no son del todo inmutable, ya que cuando trabajabos con arregllos y objetos
fijate:
*/

const vehicles = []
vehicles.push("SEAT")
console.log(vehicles);

vehicles.pop()
vehicles.log(vehicles)