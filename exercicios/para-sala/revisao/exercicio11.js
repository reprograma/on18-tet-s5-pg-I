// 2) Retornar frutas com somente a primeira letra maiúscula
// const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

//frutas.map(frutas) => frutas[0].toUpperCase() + frutas.slice(1).toLowerCase()

// Primeira resolução:

// const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];
// const getFrutas = frutas.map(fruta => {
//     const tratarFruta = fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();
//     return tratarFruta
// })
// console.log(getFrutas)

// Segunda resolução:

const frutas = ["maçã", "banana", "Pêra", "Melancia", "pêsSSEgO", "jAcA"]

function FrutasPrimeiraLetraMaiuscula(lista, primeiraLetra, restoDaPalavra) {

let buscaFrutas = lista.map((cadaItemDaLista) => cadaItemDaLista[primeiraLetra].toUpperCase() + cadaItemDaLista.slice(restoDaPalavra).toLowerCase())
    console.log(buscaFrutas);
}
FrutasPrimeiraLetraMaiuscula(frutas, 0, 1)