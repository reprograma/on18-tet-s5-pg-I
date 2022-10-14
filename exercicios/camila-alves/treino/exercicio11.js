// 2) Retornar frutas tratadas com somente a primeira letra maiúscula e as demais minúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];




const listaDeFrutas = frutas.map((fruta) => fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
console.log(listaDeFrutas) 


// Outra possível solução:

// let frutasEditadas = []
// frutas.forEach((fruta) => {
//     frutasEditadas.push(fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
// })
// console.log(frutasEditadas) 








