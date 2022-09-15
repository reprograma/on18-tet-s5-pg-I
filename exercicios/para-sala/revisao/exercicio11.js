// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];


let frutasCorrigido = frutas.map((fruta) => fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())

console.log(frutasCorrigido)