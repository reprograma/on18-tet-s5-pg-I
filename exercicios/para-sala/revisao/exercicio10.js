// Dado uma lista:
// const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]

/*Adicione mais um item na primeira posição do array.
Item: "Ana"
Em seguida, mostre no console.log()*/

// Primeira resolução:
// const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]
// console.log(professoras.unshift("Ana"))
// console.log(professoras)

// Segunda resolução:

const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]
function addPrimeiraPosicaoLista(item, lista){
lista.unshift(item)
console.table(lista)
}
addPrimeiraPosicaoLista("Ana", professoras)