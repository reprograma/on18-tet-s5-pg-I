// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

let resultado = frutas.filter(element => element.charAt(0) == element.charAt(0).toUpperCase())


// m == M 
// b == B
// P == P

console.log(resultado);







