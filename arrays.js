// - Los arrays es una estructura de datos y tipo objeto
// - Guardará más tipos de datos dentro de sí, incluso otros arrays

// accedemos a los elementso del array a través del nombre de su variable
var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa'];

// Metodos del array
frutas.unshift('Coco'); // Agregar un elemento al inicio del array
frutas.push('Uvas'); // Agregar un elemento al final del array

frutas.pop(); // Eliminar el elemento del final del array
frutas.shift(); // Eliminar el elemento al inicio del array

var posicion = frutas.indexOf('Cereza'); // Buscar ciertos elementos del array
