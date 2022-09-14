// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];
const apenasMaiusc = frutas.filter((palavra) => palavra[0] == palavra[0].toUpperCase())
console.log(apenasMaiusc)