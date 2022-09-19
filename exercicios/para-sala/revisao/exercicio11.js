<<<<<<< HEAD
// 2) Retornar frutas com somente a primeira letra maiúscula

const frutas = ["maçã", "banana", "Pêra", "Melancia", "pêsSSEgO", "jAcA"]
function retornarFrutasComPrimeiraLetraMaiuscula(lista, indice0, indice1) {
    let buscaFrutas = lista.map((fruta) => fruta[indice0].toUpperCase() + fruta.slice(indice1).toLowerCase())
    console.log(buscaFrutas);
}
retornarFrutasComPrimeiraLetraMaiuscula(frutas, 0, 1);

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
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
