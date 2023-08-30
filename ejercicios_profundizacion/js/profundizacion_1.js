/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/
function promedio(numero1, numero2, numero3, numero4, numero5) {
    console.log("Funcion promedio");
    alert(`Los numeros ingresados son:${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}`)
    console.log(`Los numeros ingresados son:${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}`)
    promedio = (numero1 + numero2 + numero3 + numero4 + numero5) /5;
    console.log(`El promedio es: ${promedio}`);
    alert(`El promedio es: ${promedio}`)
}

promedio(10, 5, 8, 9, 2);