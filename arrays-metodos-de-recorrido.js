// Metodos de recorrer un array

var articulos = [
  { nombre: 'Bici', costo: 3000 },
  { nombre: 'Television', costo: 2500 },
  { nombre: 'Libro', costo: 320 },
  { nombre: 'Celular', costo: 10000 },
  { nombre: 'Laptop', costo: 20000 },
  { nombre: 'Teclado', costo: 500 },
  { nombre: 'Audifonos', costo: 1700 }
];

// .filter
// Nos va a ayudar a filtrar ciertas cosas
// El filter va a validar si algo es verdad o falso y lo va a convertir en un nuevo array
// Este metodo no va a modificar el array original 

var articulosFiltrados = articulos.filter((articulo) => {
  return articulo.costo <= 500;
})

// .map
// Este metodo me va a ayudar a maquillar ciertos articulos (dijo mapear pero al escuchar a 2.x entendi maquillar y lo entendí mejor)
// De igual forma me va a generar un nuevo array, no va a modificar el que yo tengo

var articulosMapeados = articulos.map((articulo) => {
  return articulo.nombre
});