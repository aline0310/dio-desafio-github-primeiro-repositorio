// o que são variaveis ou arrays

//como declarar um array
/*let array = ["string", 1, true];
console.log(array);*/

//pode guardar varios tipos de dados
let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]]
console.log(array);
console.log(array[0]);

//forEach
/*array.forEach(function(item, index){console.log(item, index)});*/

/*array.push("novo item")
console.log(array)*/

/*array.pop();
console.log(array);*/

/*array.shift();
console.log(array);*/

/*array.unshift("novo item");
console.log(array)*/

/*console.log(array.indexOf(true))*/

/*array.splice(0,3);
console.log(array)*/

let novoArray = array.slice(0,3);
console.log(novoArray)
