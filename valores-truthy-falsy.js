// Para validaciones es útil conocer que tipos de valors son Verdaderos o Falsos
// con Boolean() podemos comprobar si algo es verdadero o falso (nos retorna true o false)

//falsy
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(NaN)) //not a number
console.log(Boolean(undefined)) //not value yet
console.log(Boolean(false))
console.log(Boolean("")) //empty string

//truthly
console.log(Boolean(" ")) //string con minimo un caracter, un espacio también es un caracter
console.log(Boolean("a")) 
console.log(Boolean(1)) //any number :not 0
console.log(Boolean({})) //arrays, even if they are empty
console.log(Boolean(function(){})) //functions, even if they are empty
console.log(Boolean(function(){return false;})) //functions, even if return false is truthly