// Concatenar cadenas

let nombre   = "Juan";
let apellido = "Gonzales";

let nombreCompleto = nombre + ' ' + apellido;

console.log( nombreCompleto );

let x = nombre + (5 + 15);
console.log(x);

x = 2 + 5 + nombre;
console.log( x );

//Falta el nuevo: 

let nombreCompleto2 = `Nombre: ${nombre}, apellido: ${apellido}`;
console.log( nombreCompleto2 );