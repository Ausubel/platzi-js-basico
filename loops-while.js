// While: Se ejecuta su bloque de código mientras la confición sea verdadera

var estudiantes = ['Valentina', 'Carlos', 'Julian', 'Marcela', 'Petra'];

function saludarEstudiante(estudiante) {
  console.log(`Hola ${estudiante}`);
}

while(estudiantes.length > 0) {
  console.log(estudiantes)
  var estudiante = estudiantes.shift();
  saludarEstudiante(estudiante);
}