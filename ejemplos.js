var array = [1,2,3,4,5]
array.push[12]

array.pop();
console.log(array);

// el forEach mapea el array

array.forEach(function(elemento, indice){
    console.log("elemento ", elemento, "pocision ", indice)
})

//la ventaja del map sobre el forEach es que el nuevo array 
var array2 = array.map(function(ele, ind){
    console.log("elemento ", ele, "indice ", ind)
    return ele + 5;
})
console.log("array ", array)
console.log("array2 ", array2)

//este va a consologear todo el arrays junto0

var array3 = [hola, como, estas]
var acumulador = array3.reduce(function(ac, ele){
    return ac + ele
})
console.log("acumulador ", ac);

// argumentos

function mostrar (...args){
    console.log(args);
}

mostrar(1, 2, 3, 4, 5, 6, 7)
