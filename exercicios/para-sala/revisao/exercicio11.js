// 2) Retornar frutas com somente a primeira letra maiúscula

const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

 
let tratarFrutas = [];

for (let i = 0; i < frutas.length; i++) {
    const todasFrutas = frutas[i];
    
    const letraMaiuscula = frutas[i].charAt(0).toUpperCase();
    const letraMinuscula = frutas[i].slice(1).toLocaleLowerCase();

    const tratarPalavras = letraMaiuscula.concat(letraMinuscula);
    
    tratarFrutas[i] = tratarPalavras;
}

console.log(tratarFrutas)