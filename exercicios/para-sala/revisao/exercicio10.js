// Dado uma lista:
//const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]

/*Adicione mais um item na primeira posição do array.
Item: "Ana"
Em seguida, mostre no console.log()*/

const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]
function adicionePrimeiroNome(item, lista){
    lista.unshift(item)
    console.log(lista)
        
}
adicionePrimeiroNome("Ana", professoras)
