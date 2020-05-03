/*
  Conjunto de sentencías que nosotros podemos utilzar para
  generar ciertas acciones con los valores que ya guardamos
  antes en las variables.
*/

// Existen 2 Tipos de funciones: Declarativas y de Expresión


// Declarativas
  function miFuncion() {
    return 3;
  }

// Expresión

var miFuncion = function() {
  return a + b;
}

/** 
  // Diferencias:

  A las funciones declarativas se les aplica hoisting, y a la expresión de función, no.
  Ya que el hoisting solo se aplica en las palabras reservadas var y function.

  Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función
  antes de que ésta sea declarada, y con la expresión de función, no,
  tendríamos que declararla primero, y después mandarla llamar.

 */

// https://www.campusmvp.es/recursos/post/que-es-el-hoisting-en-javascript.aspx
// https://platzi.com/clases/1814-basico-javascript/26295-cuando-utilizar-una-funcion-declarativa-y-una-expr/