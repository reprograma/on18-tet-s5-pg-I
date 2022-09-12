// Dado uma lista:
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

/*Remova a última posição que é o nome Beatriz.
Em seguida, mostre no console.log*/

/*const retiraUltimo = listaNomes.pop();

console.log(retiraUltimo);
console.log(listaNomes)*/

function retirarUltimoNome(lista) {
lista.pop();
console.log(lista);
}
retirarUltimoNome(listaNomes);