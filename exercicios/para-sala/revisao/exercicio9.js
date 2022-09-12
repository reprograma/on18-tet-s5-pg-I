// Dado uma lista:
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

/*Remova a última posição que é o nome Beatriz.
Em seguida, mostre no console.log*/

// const retirarUltimo = listaNomes.pop();

// console.log(listaNomes);

function retirarUltimo(lista) {
    lista.pop();
    console.log(lista);
}
retirarUltimo(listaNomes)

