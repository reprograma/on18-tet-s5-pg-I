// Dado uma lista:
const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]

/*Adicione mais um item na primeira posição do array.
Item: "Ana"
Em seguida, mostre no console.log()*/
let adicionarNoInicio = professoras.unshift("Ana")
console.log ('retorno unshift', adicionarNoInicio)
console.log('Array modificada:', professoras)
