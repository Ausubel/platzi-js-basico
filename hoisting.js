/**
 * HOISTING: Es cuando las variables y funciones se procesan antes de que se ejecute cualquier trazo de código
 */
 /*
  - JS declara primero las funciones antes que las variables
  - La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla
  - Se trata del comportamiento predeterminado para la declaración de las variables, funciones
  - El hoisting solo aparece en funciones y variables del ecmascript 5 para abajo
  - El hoisting de Es6 en adelante no sucede porque solo sucede con 2 palabras clave 'variable' (var) y 'función' (function)
  - Las nuevas versiones de ES6 presentaron 2 nuevas variables, 'const' y 'let'
  
*/

var miNombre; // declarando variable

    miNombre = 'Julian'; // inicializar o definir

var miNombre = 'Julian'; // declaración y inicializa una variables

// ---- Otro ejemplo
  // Si se llama una variable antes de inicializarla

console.log(elCarro); // Javascript en este punto no sabe que ha sido inicializada así que automaticamente decide declararla var elCarro = undefined;

var elCarro = 'Mclaren'

// ---- Otro ejemplo
// JS declara primero las funciones antes que las variables

hey();

function hey() {
  console.log('Hola ' + miNombre);
}
// Se ejecuta la función porque javascript la mueve a la parte superior, pero el resultado es 
// 'Hola undefined' debido a que al momento de leer miNombre ha sido declarado pero no inicializado

