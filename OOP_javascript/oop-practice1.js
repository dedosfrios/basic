// const Golosinas = function (type, flavor){
//     this.type = type,
//     this.flavor = flavor
// }

// Golosinas.prototype.mostrarElSabor = function(){
//     console.log('La golosina es tipo : '+ this.type + ' y su sabor es: '+ this.flavor)
// }

// let helado = new Golosinas ('Helado','fresa')
// let paleta = new Golosinas ('Paleta', 'piña')


/*

If you are trying to implement prototypical inheritance 
in javascript 'person' needs to be a function, not an object.

*/

//MAIN OBJECT 
//First error, create the main object as a object literal instead of a function constructor
//necesary for prototypical inheritance

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
    let persona = Object.create(GENTE_QUE_CONOSCO)
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

console.log(rectangulo)
console.log(rectangulo.hasOwnProperty('hacerAlgo'))
rectangulo.hacerAlgo()