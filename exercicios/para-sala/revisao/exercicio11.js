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

// const frutas = ["maçã", "banana", "Pêra", "Melancia", "pêsSSEgO", "jAcA"]

// function FrutasPrimeiraLetraMaiuscula(lista, primeiraLetra, restoDaPalavra) {

// let buscaFrutas = lista.map((cadaItemDaLista) => cadaItemDaLista[primeiraLetra].toUpperCase() + cadaItemDaLista.slice(restoDaPalavra).toLowerCase())
//     console.table(buscaFrutas);
// }
// FrutasPrimeiraLetraMaiuscula(frutas, 0, 1)

// Jess resolvendo na aula:

// const frutas = ["maçã", "banana", "Pêra", "Melancia", "pêsSSEgO", "jAcA"]

// const listaDeFrutas = frutas.map((fruta) => fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
// console.table(listaDeFrutas)

// Resolução usando For:

const frutas = ["maçã", "banana", "Pêra", "Melancia", "pêsSSEgO", "jAcA"]

let tratarFrutas = [];

// a ideia do for é percorrer listas para fazer algum tipo de ação

for (let inicializador = 0; inicializador < frutas.length; inicializador++) {
    const todasFrutas = frutas[inicializador]

    const letraMaiuscula = frutas[inicializador].charAt(0).toUpperCase();
    const letraMinuscula = frutas[inicializador].slice(1).toLowerCase();

    const tratarPalavras = letraMaiuscula.concat(letraMinuscula)

    //const concatenarOperador = letraMaiuscula + letraMinuscula;

    tratarFrutas[inicializador] = tratarPalavras

}

console.log(tratarFrutas)
