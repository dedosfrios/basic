

function plus1(value){
    return value + 1
}

plus1(2);

function superPlus1(value){
    // 1. See if the value is an Array
    if(value.isArray){
        // 2. if (value.isArray === true)
        let newArray = [];
        // 3. create a new variable to hold the new array with the elements plus 1
        for(i=0; i<value.length; i++){
        // 4. Use a for loop to go through the array
            newArray[i] = value[i]+1
            // 5. Use the iterator value to modifify the newArray variable
        }
        return newArray    
        // Return the new array
    }
    return value + 1
}