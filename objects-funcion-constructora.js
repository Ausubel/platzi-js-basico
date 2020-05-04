// Podemos crear una plantilla de un objeto y luego crear nuevas instancías del objeto especial

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
};

var nuevoCarro = new auto('Tesla', 'Model 3', '2020');