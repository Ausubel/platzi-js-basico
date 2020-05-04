// Condicionales

if (true) { // TODO lo que este en el parentesis debe ser verdadero
  console.log('es verdadero')
}
// resultado 'es verdadero'

if (false) { // Como no es verdadero no se ejecuta
  console.log('es verdadero')
}
// resultado: Nada porque como no es verdadero

// Para validar dar una opción en caso de que sea falso utilizamos el ELSE
if (false) {
  console.log('es verdadero')
} else { // este coso si se ejecuta
  console.log('es falso')
}

// también podemos dar más opciones con 
var edad = 19;
if (edad === 18) {
  console.log('opción')
} else if (edad > 18) {
  console.log('opción')
} else if (edad > 25) {
  console.log('opción')
} else {
  console.log('opción')
}

// OPERADOR TERNARIO
condicion ? true : false;