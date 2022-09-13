// Dado uma lista:
// const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"];

/*Remova a última posição que é o nome Beatriz.
Em seguida, mostre no console.log*/

const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"];

function removeUltimoNome(lista) {
    lista.pop();
    console.log(lista);
}

removeUltimoNome(listaNomes);