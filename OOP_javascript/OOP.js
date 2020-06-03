

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


function Girls (name, placeOfMeet, age, fallinInLove){
    this.name = name,
    this.placeOfMeet = placeOfMeet,
    this.age = age,
    this.fallinInLove = fallinInLove,

    this.didSheFellInLove = function(){
        const self = this;
        
        let resultado = fallinInLove ? yesSheDid : notSheDidNot;
        
        function yesSheDid(){
            return 'Yeap, ' + self.name + ', she fell in love'
        }
        function notSheDidNot(){
            return 'Naa mate'
        }        
    return console.log(resultado());
    }
    this.whereImeetHer = function(){
        console.log('you meet ' + this.name + ' in ' + this.placeOfMeet )
    }
}

const sadith = new Girls('Sadith', 'Karlas Place', 22, true)
const karoll = new Girls('Karoll','Leo Design', 19 , false)

console.log(sadith.didSheFellInLove())
console.log(karoll.didSheFellInLove())
// console.log(sadith.whereImeetHer())


// console.log(sadith)

//El objeto windows se crea cuando se renderiza el DOM tree, el 