// Dado uma lista:
const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]

/*Adicione mais um item na primeira posição do array.
Item: "Ana"
Em seguida, mostre no console.log()*/

professoras.unshift("Ana") //unshift coloca item primeira posição.
console.log (professoras)

professoras.shift()    //Tira do início não importa quem, por isso não precisa preencher os ()
console.log (professoras)