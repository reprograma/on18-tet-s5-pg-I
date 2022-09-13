// Dado uma lista:
/*Adicione mais um item na primeira posição do array.
Item: "Ana"
Em seguida, mostre no console.log()*/

//const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]
const novaLista = professoras.unshift("Ana");
console.log(professoras)

const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]
function adicionarPrimeiroNome (item, lista)  {
lista.unshift(item)
console.log(lista)
}
adicionarPrimeiroNome('Ana', professoras)

