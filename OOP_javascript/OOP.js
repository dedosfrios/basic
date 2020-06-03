

const casaDeMorela = {
    livingroom :            "salita",
    nombrarSitiosDeLaCasa : 
        function (){ console.log('Esta es la ' + this.livingroom)
    }
}


function Casa (livingroom, kitchen, rooms, baths){
    this.livingroom = livingroom,
    this.kitchen = kitchen,
    this.rooms = rooms,     
    this.baths = baths,
    
        this.nombrarSitiosDeLaCasa = 
            function(){console.log(this.livingroom);}
}

const casaDeJota = new Casa ('Salota','Cocinita', 3, 2);
// casaDeJota.nombrarSitiosDeLaCasa();

// console.log (casaDeJota.constructor)
// console.log (casaDeJota.__proto__)
// console.log(" ");
// console.log (casaDeMorela.constructor)
// console.log (casaDeMorela.__proto__)
// console.log(" ");

console.log(Object)
console.log(this.constructor)
