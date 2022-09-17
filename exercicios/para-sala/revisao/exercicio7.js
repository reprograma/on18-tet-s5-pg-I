/* Crie uma lista com os seguintes itens:
Ovos, feijão, macarrão, abobora, cenoura.
Em seguida, no console.log(),
mostre a quantidade de itens que contém
na lista criada.  */

// Primeira resolução:

// const lista = [
//     "ovos", "feijão", "macarrão", "abóbora", "cenoura"
// ]
// console.log(lista.length)

// Segunda resolução:

function contarItens(listaDeCompras) {
    console.log(listaDeCompras.length);
    console.table(listaDeCompras)
}
contarItens(["Ovos", "feijão", "macarrão", "abobora", "cenoura"])