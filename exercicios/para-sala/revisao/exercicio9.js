// Dado uma lista:


/*Remova a última posição que é o nome Beatriz.
Em seguida, mostre no console.log*/

// listaNomes.pop('Beatriz');
// console.log(listaNomes);
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]
function removeUltimoNome(lista) {
    lista.pop();
    console.log(lista);
}

removeUltimoNome(listaNomes);