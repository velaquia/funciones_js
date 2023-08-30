"use strict";

let mayoriaEdad = ''

function nombreEdad(nombre, edad) {
   nombreEdad = `${nombre} ${edad}`
   console.log(nombreEdad)
   let resultado = ''
   if (edad > 18) {
      resultado = "mayor"
   } else {
      resultado = "menor"
   }
   return resultado;
}

mayoriaEdad = nombreEdad("martin", "21")

const tmp = `Es ${mayoriaEdad}`
console.log(tmp)