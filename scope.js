
/**
 * SCOPE: Es el alcance que tienen las 'variables'
 */

/**
  * Existen 2 tipos de SCOPE
  * - GLOBAL: Se accede desde cualquier parte
  * - LOCAL: Dentro de una funcion
  */

// Lo que esta en local puede acceder a lo que esta en Global
// Lo que esta en global no puede acceder a lo que esta en local


var miNombre = 'Valentina';

function nombre() {
  var miApellido = 'SC';
  console.log(miNombre + '' + miApellido);
} 

nombre();