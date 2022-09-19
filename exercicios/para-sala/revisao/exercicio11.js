// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];



// const frutas1 = frutas.map( frutas => frutas.toUpperCase());
// console.log(frutas1);



function retornarFrutasComPrimeiraLetraMaiuscula(listaDeFrutas, posicaoInicial, posicaoFinal) {
    let buscaFrutas = listaDeFrutas.map((fruta) => fruta[posicaoInicial].toUpperCase() + fruta.slice(posicaoFinal).toLowerCase())
    console.log(buscaFrutas);
}
retornarFrutasComPrimeiraLetraMaiuscula(frutas, 0, 1);



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
let tratarFrutas = [];

// a ideia do for é percorrer listas para fazer algum tipo de ação

// for (let inicializador = 0; inicializador < frutas.length; inicializador++) {
//     const todasFrutas = frutas[inicializador]

//     const letraMaiuscula = frutas[inicializador].charAt(0).toUpperCase();
//     const letraMinuscula = frutas[inicializador].slice(1).toLowerCase();

//     const tratarPalavras = letraMaiuscula.concat(letraMinuscula)

//     //const concatenarOperador = letraMaiuscula + letraMinuscula;

//     tratarFrutas[inicializador] = tratarPalavras

// }

// console.log(tratarFrutas)
