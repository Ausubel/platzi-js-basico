var articulos = [
  { nombre: 'Bici', costo: 3000 },
  { nombre: 'Television', costo: 2500 },
  { nombre: 'Libro', costo: 320 },
  { nombre: 'Celular', costo: 10000 },
  { nombre: 'Laptop', costo: 20000 },
  { nombre: 'Laptop', costo: 22000 },
  { nombre: 'Teclado', costo: 500 },
  { nombre: 'Audifonos', costo: 1700 }
];

// .find
// El método find() devuelve el (el valor del) primer elemento del array que cumple la función de prueba proporcionada.
// En este ejemplo devolvería el primer objeto que vcumpla con la validación
// Este metodo nos va a ayudar a encontrar algo dentro del array
// No va a modificar el array que ya tengo
// .find() valida true o false 
// Si el articulo existe, lo va a regresar, de lo contrario devuelve undefined

var encuentraArticulo = articulos.find((articulo) => {
  return articulo.nombre === 'Laptop';
})
encuentraArticulo;

// .forEach()
// Me va a hacer un recorrido por el array pero sin crear un nuevo articulo y sin modificar el articulo
articulos.forEach((articulo) => {
  console.log('Nombre Articulo', articulo.nombre)
});

// .some()
// Nos devuelve true o false si encuentra un elemento en el array que le hemos indicado
// Va a generar una validación de verdadero o falso para articulos que cumplan esa validación
var articulosSeleccionados = articulos.some((articulo) => {
  return articulo.nombre === 'Laptop';
});
articulosSeleccionados; // true

// Ejercicio:
// Devolver lista de objetos encontrados que cumplan la condición

var articulosEncontrados = [];
articulos.forEach((articulo) => {
  articulo.nombre === 'Laptop' ? articulosEncontrados.push(articulo) : false;
})