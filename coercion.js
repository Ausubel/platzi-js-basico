/**
 * - Javascript es un lenguaje debilmente tipado
 * - Hay 2 tipos de coerciones, implicitas y explicitas
 *  - Inplicitas cuando el lenguaje nos ayuda y cambia un tipo de valor a otro tipo de valor 
 *  - Explicita es cuando nosotros indicamos/obligamos a que un valor cambies a otro tipo de valor si necesitamos que sea de un tipo distinto (o porque nos da la gana)
 * - Coerción significa que podemos cambiar de un tipo de valor a otro tipo de valor : number -> string y viceversa
 */

 // 4 + "7" = "47"
 // 4 * "7" = 28
 // 2 + true = 3 // true es 1 para JS
 // false - 3 = -3 // false es 0 para JS


 // Implicita: Cuando el lenguaje analiza y nos ayuda a realizar la operación según lo que entiende
  var a = 4 + "7"; // "47"
  console.log(typeof a); // El resultado es string
  // debido a que javascript toma el operador + como un operador de concatenación,
  // por lo tanto no realiza una suma de un número y un string,
  // lo que hace es juntar los 2 digitos con el operador de concatenación.

  var b = 4 * "7"; // 28
  console.log(typeof b); // El resultado es number
  // javascript analiza que al tener el operador de multiplicación
  // queremos multiplicar (y no juntar/concatenar) 2 números
  // Entonces lo que hace es convertir el 7 en un numero para poder realizar la operación


// Explicita: Cuando obligamos a un dato que cambie su valor porque lo necesitamos (porque nos da la gana )
  // Viendo lo anterior pensaríamos que para convertir entonces un número a un string (porque por alguna razón lo necesitamos),
  // lo que haríamos es lo siguiente: (de manera implicita)
  var a = 20;
  var b = a + "";
  // el resultado de esto sería "20" en string
  console.log(typeof b); // string

  // Pero de manera explicita haríamos lo siguiente
  var c = String(a); // Esto nos daría "20" // Metodo String hace una coercion explicita
  console.log(typeof c); // string
  // Acabamos de obligar a la variable a que era un número a que se convierta en un string

  var d = Number(c); // Metodo Number hace una coerción explicita
  console.log(typeof d); // number