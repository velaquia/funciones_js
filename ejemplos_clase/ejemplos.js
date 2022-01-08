'use strict';

alertMessage();


/* Inove Coding School
 * Ejemplos de código de clase.
 * Funciones
 * Este archivo sirve como borrador con el código visto en la clase.
 */

// Declaración de la función 
function nombreDeLaFuncion() {
    console.log(`Esta es mi primera función!`);
}

// Aplicación
var x = 1;
if (x == 1) {
    nombreDeLaFuncion();
}

// Declaración de una función con ingreso de datos
function cuadrado(x) {
    return x * x;
}

// Aplicación de la función
var numero = 10;
console.log(`El cuadrado del número ${numero} es: ` + cuadrado(numero));

function alertMessage() {
    alert("Presionaste el botón!");
}
    
function showText(x) {
    alert(x);
}

