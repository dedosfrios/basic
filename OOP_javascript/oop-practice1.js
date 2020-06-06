const Golosinas = function (type, flavor){
    this.type = type,
    this.flavor = flavor
}

Golosinas.prototype.mostrarElSabor = function(){
    console.log('La golosina es tipo : '+ this.type + ' y su sabor es: '+ this.flavor)
}

let helado = new Golosinas ('Helado','fresa')
let paleta = new Golosinas ('Paleta', 'piña')

// console.log(helado.constructor)

/*

If you are trying to implement prototypical inheritance 
in javascript 'person' needs to be a function, not an object.

*/

//MAIN OBJECT 
//First error, create the main object as a object literal instead of a function constructor
//necesary for prototypical inheritance


const DESCONOCIDOS = function(isHumano){
    this.isHumano = isHumano
}

const GENTE_QUE_CONOSCO = {
    employes:[],
    howManyHaveAJob : function(){
       return console.log( 'Tienes ' + this.employes.length + ' amigos empleados')
    }
 }



//for adding a method to the .prototype of the object which was created using Object.create you must use __proto__
GENTE_QUE_CONOSCO.__proto__.saluditos = function (){
    console.log('Holasssss, yo soy ' + this.name + ' !!')
}

//Factory of objects with the prototype/Constructor pointing at the object GENTE_QUE_CONOSCO
function agregarPersonas(name, hasJob){ 
    let persona = Object.create(GENTE_QUE_CONOSCO.__proto__)
    persona.name = name
    persona.hasJob = hasJob

    let addEmployee = function(persona){
        if(persona.hasJob === true){
            GENTE_QUE_CONOSCO.employes.push(persona)
        }
    }  
    addEmployee(persona)
    
    return persona
}

let jota = agregarPersonas('Jota', true);
let fabiola = agregarPersonas('Fabiola', true);
let morela = agregarPersonas('Morela', false);

// jota.saluditos();
// console.log(GENTE_QUE_CONOSCO.employes)
// GENTE_QUE_CONOSCO.howManyHaveAJob()

// console.log(jota)
// console.log(jota.constructor)



const SuperItem = {
    name: 'main',
    angles: 5
}

function agregarObjecto (name, angle){
    let item = Object.create(SuperItem.__proto__)
    item.name = name
    item.angle = angle

    item.__proto__.hacerAlgo = function(){
        console.log('hago algo')
    }
    return item
}

let rectangulo = agregarObjecto ('rectangulo', 4)

// console.log(rectangulo)
// console.log(rectangulo.hasOwnProperty('hacerAlgo'))
// rectangulo.hacerAlgo()


function yell(n){
    return n > 0 ? yell(n-1) + 'a' : 'hiy'
}
let grito = yell(4)
// console.log(grito)

let numero1 = 10
let numero2 = 8

function Frutas (nombre,familia){
    this.nombre = nombre
    this.familia = familia
    console.log("se esta creando una instancia/Objeto de la clase/funcion de primera clase")
    
    function multiplicarVariables(){
        numero1 = 2
        numero2 = 2
        return numero1*numero2
    }
    console.log(multiplicarVariables())

}

// let manzana = new Frutas('Fresa','Planta Rastrera')

function usarFrutas(){
    return Frutas()
}

usarFrutas()

/*

var obj = new Object(); // not a functional object
obj.prototype.test = function() { alert('Hello?'); }; // this is wrong!

function MyObject() {} // a first class functional object
MyObject.prototype.test = function() { alert('OK'); } // OK



1. CONSTRUCTOR function

const Constructor = function (par1, par2, par3,){
    this.par1 = par1
    this.par2 = par2
    this.par3 = par3
}

Constructor.prototype.saludoAgresivo = function(){
    console.log('vayanse a la chingada')
}


Object.create
        a method for set the prototype of the object resulted of executing this method

*/