
const PayThingInTheCart = function(){};


function Product (name, price){
    this.name = name,
    this.price = price,
}

//METRO ASSETS

const GET_METRO_PRODUCTS = [
    { carnes:   [{ name:'jamon', price: 3, category: 'embutido' }, 
                 { name:'salchicha',price: 5, category: 'embutido'},
                 { name:'mortadela', price: 10, category: 'embutido'}]
    },
    {
        lacteos:{
            name
        }
    }

]


function createInventory(){
    let inventory = []

    function crearProductos(name, price, category){

        for(i=0 , array.length)

        const nuevoProducto = new Product (name, price, category)
        inventory.push(nuevoProducto) 
    }

    // adding product to inventary
    crearProductos('jamon', 3,'embutido')
    crearProductos('salchicha', 5, 'embutido')
    crearProductos('mortadela',10, 'embutido')

    return inventory
}

const inventory_metro = createInventory();





function addInventoryToStore (store, inventory)
    let store = store
    store.inventory = inventory
}

addInventoryToStore (metro, inventory_metro);

const Store = function (name, type){

    this.name = name,
    this.type = type,
}

Store.prototype.getName = function(){
    return this.name
}


const metro = new Store ('metro','supermarket')









const shoppingList = [Jamon, Leche, Quinua, Queso, Mantequilla, Mango]


function startShopping (shoppingList, store){

    const status = false    
    const producto = inventaryProduct.grab()

    if (array[0] === shopInventary.hasProduct(array[0])){
        
        
        producto.payForIt();
    }
    doneShopping = true
    return status
}

