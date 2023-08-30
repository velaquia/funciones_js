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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
let invitados = ''

function generarInvitados(repeticion) {
    let invitados = '';
    let i = 0;
    while (i < repeticion) {
        invitados = invitados.concat(prompt('Ingrese un invitado: '));
        invitados = invitados.concat(', ')
        i += 1;
    }
   
    return invitados
}

repeticion = parseInt(prompt('ingrese cantidad de invitados requeridos:' ));
invitados = generarInvitados(repeticion);
console.log(`Mis invitados: ${invitados}`)