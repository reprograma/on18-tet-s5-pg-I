// Dado uma lista:
//const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]

/*Adicione na última posição o nome Beatriz.
Em seguida, mostre no console.log
*/

// listaNomes.push("Beatriz")
// console.log(listaNomes)

const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]
function adicionaUltimoNome(nome) {
    listaNomes.push(nome);
    console.log(listaNomes);
}

adicionaUltimoNome("Beatriz");
