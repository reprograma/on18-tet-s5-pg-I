// Dado uma lista:
// const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]

/*Adicione na última posição o nome Beatriz.
Em seguida, mostre no console.log
*/

// Primeira resolução:

// const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]
// console.log(listaNomes.push("Beatriz"))
// console.log(listaNomes)

// Segunda resolução:

const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]
const outraLista = ["RuPaul", "Bob The Drag Queen", "Jinkx Monsoon"]

function adicionaUltimoNome(nome, lista) {
    lista.push(nome);
    console.log(lista);
}
adicionaUltimoNome("Beatriz", listaNomes);
adicionaUltimoNome("Nathielly Charles", outraLista)