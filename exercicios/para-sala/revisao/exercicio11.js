// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

let resultado = frutas.filter(element => element.charAt(0) == element.charAt(0).toUpperCase())


const listaDeFrutas = frutas.map((fruta) => fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
console.log(listaDeFrutas)
