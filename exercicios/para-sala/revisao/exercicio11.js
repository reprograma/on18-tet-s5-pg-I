// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

console.log( frutas.filter( fruta => fruta[0] >= 'A' && fruta[0] <= 'Z' ) );