// Dado uma lista:
// const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]

/*Adicione na última posição o nome Beatriz.
Em seguida, mostre no console.log
*/
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"];

function adicionaUltimoNome(lista, nome) {
    lista.push(nome);

    console.log(lista);
}

adicionaUltimoNome(listaNomes, "Beatriz");