// Dado uma lista:
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

/*Remova a última posição que é o nome Beatriz.
Em seguida, mostre no console.log*/

//Primeira resolução:

// const retirarUltimo = listaNomes.pop();

// console.log(listaNomes);

//Segunda resolução:

function retirarUltimo(lista) {
    lista.pop();
    console.log(lista);
}
retirarUltimo(listaNomes)

