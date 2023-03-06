
// TIPOS DE DATOS

// 1. String
var nombre = "Jose";
console.log(nombre);
console.log(typeof(nombre));

// 2. Number
var numero = 1000;
console.log(numero);
console.log(typeof(numero));

// 3.Float
var dinero = 300.20;
console.log(dinero);
console.log(typeof(dinero));

// 4. Object
// CASI MAS O MENOS UN DICCIONARIO
var juego = 'League of Legends';
var objeto = {
     nombre:'Ezreal',
     edad:20,
     rol:"Tirador",
     juego:`${juego}`,
     habilidades: {
          botonA: 'Disparar',
          botonB: 'Pasiva',
          botonC: 'Teleport'
     }
};
console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.habilidades.botonA);
console.log(typeof(objeto));

// 5. Boolean
let isActive = false;
let isEmpty = true;
console.log(isActive);
console.log(isEmpty);
console.log(typeof isActive );
console.log(typeof isEmpty );


// 6. Función
function saludar(){
     console.log("Hello");
}

console.log(typeof saludar);

// 7. Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// 8. Clase | Casi como funciones
class Persona{
     miatributo = "Atributo";

     constructor(nombre, age){
          this.nombre = nombre;
          this.age    = age;
     }
}
console.log(Persona);
console.log(typeof Persona);

// 9. Undefined
// Valor Indefinido. Son aquellos que no declararon a la variable.
// Valor por Default si no declaran. 
var noTieneValor = undefined;
console.log(noTieneValor);
console.log(typeof noTieneValor);

// 10. Null
// Ausencia del Valor. Y es de tipo Objeto.
var miNumero = null;
console.log(miNumero);
console.log(typeof miNumero);

// 11. Arreglos
var autos = ["Ford","mustang","Volsvwagen"];
console.log(autos);
console.log(typeof autos);

// 12. Void
var z = '';
console.log(z);
console.log(typeof z);



