<<<<<<< HEAD
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
=======
// 2) Retornar frutas tratadas com somente a primeira letra maiúscula e as demais minúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

/* let frutasEditadas = []
frutas.forEach((fruta) => {
    frutasEditadas.push(fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
})
console.log(frutasEditadas) */


/* const listaDeFrutas = frutas.map((fruta) => fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
console.log(listaDeFrutas) */


/* function primeiraLetraMaiuscula(lista) {

    for (let i = 0; i < lista.length; i++) {
        lista[i] = lista[i].toLowerCase()
    }

    for (let i = 0; i < lista.length; i++) {
        lista[i] = lista[i][0].toUpperCase() + lista[i].substring(1)
    }

    return console.log(lista)
}


primeiraLetraMaiuscula(frutas) */

/*
const tratarListasFrutas = frutas.map((fruta) => {
    const letraMaiuscula = fruta[0].toUpperCase();
    const letraMinuscula = fruta.slice(1).toLowerCase();

    const unirPalavras = letraMaiuscula.concat(letraMinuscula);

    const unirPalavrasComOperadorConcat = fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();

    return unirPalavrasComOperadorConcat
})
*/
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a

let tratarFrutas = [];

// a ideia do for é percorrer listas para fazer algum tipo de ação

<<<<<<< HEAD
for (let inicializador = 0; inicializador < frutas.length; inicializador++) {
=======

for (let inicializador = 0; inicializador < frutas.length; inicializador++) {

>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
    const todasFrutas = frutas[inicializador]

    const letraMaiuscula = frutas[inicializador].charAt(0).toUpperCase();
    const letraMinuscula = frutas[inicializador].slice(1).toLowerCase();

    const tratarPalavras = letraMaiuscula.concat(letraMinuscula)

    //const concatenarOperador = letraMaiuscula + letraMinuscula;

    tratarFrutas[inicializador] = tratarPalavras

}

<<<<<<< HEAD
console.log(tratarFrutas)
=======
console.log(tratarFrutas)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
