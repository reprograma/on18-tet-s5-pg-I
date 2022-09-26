// Dado uma lista:
// const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

/*Remova a última posição que é o nome Beatriz.
Em seguida, mostre no console.log*/

const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

const removerNomeNoFinal = listaNomes.pop("Beatriz");

console.log(removerNomeNoFinal);
listaNomes.pop();

console.log(listaNomes)
