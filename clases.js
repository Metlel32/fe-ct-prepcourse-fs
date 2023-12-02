// clases de objetos java script
function carro(marca, ruedas){
   this.marca = marca;
   this.ruedas = ruedas;
   this.imprimirMarca = function(){
      return this.marca
   }
}



// prototipado esto es como si agregara una funcion al objeto
carro.prototype.imprimirRuedas = function(){
   return this.ruedas;
}

var claseToyota = new carro ('Toyota', 4)
var claseHonda = new carro ('Honda', 8)

// class carro1 (marca){}

//saber cuantas ruedas tiene cada uno de estos

console.log(claseHonda.imprimirRuedas());
console.log(claseHonda.imprimirMarca());

console.log(claseToyota.imprimirMarca());
console.log(claseToyota.imprimirRuedas());

// clase jugador

function jugador (nombre, posicion){
   this.nombre = nombre;
   this.posicion = posicion;
   this.imprimirNombre = function (){
      return this.nombre;
   }
}

jugador.prototype.imprimirPosicion = function(){
   return this.posicion;
}

var jugadorMessi = new jugador ("messi", 10)
var  jugadorRonaldo = new jugador ("ronaldo", 15)

console.log(jugadorMessi.imprimirNombre());
console.log(jugadorMessi.imprimirPosicion());

console.log(jugadorRonaldo.imprimirNombre());
console.log(jugadorRonaldo.imprimirPosicion());

//create esto es sin herencia
var persona = Object.create({})

persona.nombre = "juan";

// objeto.assign
Object.assign(persona, {apellido: "perez", bombre: "juan"})
// la linea de abajo es lo mismo que lo de arriba 
persona.apellido = "perez2";




// este agrega todas las propiedades que tiene java script o metodos.
// las dos lines de abajo son lo mismo

var persona3 = Object.create(Object.prototype)
var persona2 = {};


// callbacks engloba todas las funciones posibles
function decirHola (nombre){
   console.log("hola ", nombre);
}

function decirAdios (nombre){
   console.log("adios ", nombre);
}

function procesarEntradaUsuario (nombre, cb){
   return cb(nombre)
}

console.log(procesarEntradaUsuario("juan", decirHola))


// otro ejemplo
function sumar(a,b){
   return a+b
}

function restar(a,b){return a-b}

function operar(a,b, cb){
   return cb(a,b)
}


console.log(operar(5,6, sumar));