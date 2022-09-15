// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];


const RetornarFrutas = frutas.map((fruits) => fruits[0].toUpperCase() + fruits.slice(1).toLowerCase())
console.log(RetornarFrutas)
