// Un ciclo es una manera rapida y sencilla de poder hacer que una tarea pueda
// repetirse sin que yo lo tenga que hacer de manera manual

var estudiantes = ['Valentina', 'Carlos', 'Julian', 'Marcela', 'Petra'];

function saludarEstudiante(estudiante) {
  console.log(`Hola ${estudiante}`);
}

// Loops
 // Este código se ejecuta mientras i no sea mayor a la longitud del array (el número de elementos del array)
for (i = 0; i < estudiantes.length; i++) {
  saludarEstudiante(estudiantes[i]);
}

//// OTRO Ejemplo

for (let estudiante of estudiantes) {
  saludarEstudiante(estudiante);
}
