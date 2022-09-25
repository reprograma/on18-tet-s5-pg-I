// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"]

// const listaDeFrutas = frutas.map((fruta) => fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
// console.log(listaDeFrutas)

//o for serve para percorrer lista para fazer alguma ação

// let trataFrutas = []

// for (let inicial = 0; inicial < frutas.length; inicial++){
//     // console.log(frutas.length);
//     // console.log(inicial);
//     // console.log(frutas[inicial]);

//     const todasFrutas = frutas[inicial]
//     // console.log(todasFrutas);
//     const letraMaiuscula = frutas[inicial].charAt(0).toUpperCase()
//     const letraMinuscula = frutas[inicial].slice(1).toLowerCase()

//     const juntarTudo = letraMaiuscula.concat(letraMinuscula)

//     trataFrutas[inicial] = tratarPalavras
    
// }

// console.log(letraMaiuscula);

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
