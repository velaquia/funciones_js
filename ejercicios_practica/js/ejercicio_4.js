"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */
let invitados = ''
// Ejercicios con funciones

function generarInvitados() {
    let invitados = '';
    let i = 0;
    while (i < 3) {
        invitados = invitados.concat(prompt('Ingrese un invitado: '));
        invitados = invitados.concat(', ')
        i += 1;
    }
   
    return invitados
}

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada
invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)