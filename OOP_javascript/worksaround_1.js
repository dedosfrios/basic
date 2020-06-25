
var funcs = []

for(var i = 0; i < 3; i++){
    funcs[i] = function (){
        console.log('my value is :' + i )
    }
} 

for (var j = 0; j < 3; j++){
    funcs[j]();
}

console.log((3<3))