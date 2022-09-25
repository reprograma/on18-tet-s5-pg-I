// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

let getfrutas = frutas.map((fruta) => fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
console.log('Resultado do exercício:', getfrutas)

/* poderia ser como a Jess fez, no meu caso o return n funciona, mas no dela sim, n entendi oq rolou: */

const getfrutas2 = frutas.map(fruta => {
    const tratarFruta = fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();
    console.log('primeira letra de cada elemento é:', fruta[0].toUpperCase())
    console.log('pegar após a primeira letra para colocar tudo em minúsculo:', fruta.slice(1).toLowerCase())
   
    return tratarFruta
}) 
console.log(getfrutas2)

/* como Jess mostrou com for: */

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
