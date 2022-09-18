// Dado uma lista:
// const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]

/*Adicione mais um item na primeira posição do array.
Item: "Ana"
Em seguida, mostre no console.log()*/

<<<<<<< HEAD
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
=======
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

listaNomes.unshift("Ana");

console.log(listaNomes)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
