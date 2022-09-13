// Dado uma lista:
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]
const lista2 = ["Gabi","Lara","Maria"]


/*Adicione na última posição o nome Beatriz.
Em seguida, mostre no console.log
*/
// listaNomes.push("Beatriz");
// console.log(listaNomes)

// const listaNome = ["Jeniffer", "Fernanda", "Amanda", "Marcela"]
function adicionaUltimoNome(nome, lista) {
    lista.push(nome);
    console.log(lista);
}

adicionaUltimoNome("Beatriz", lista2);
adicionaUltimoNome("Beatriz", listaNomes);