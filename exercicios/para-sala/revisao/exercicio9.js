// Dado uma lista:
// const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

/*Remova a última posição que é o nome Beatriz.
Em seguida, mostre no console.log*/

// Primeira resolução:

// const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]
// console.log(listaNomes.pop())
// console.log(listaNomes)

// Segunda resolução:

const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]
function retiraUltimoNome(lista) {
    lista.pop();
    console.table(lista);
}
retiraUltimoNome(listaNomes)