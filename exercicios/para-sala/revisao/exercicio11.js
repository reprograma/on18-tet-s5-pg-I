// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

const executaBuscaFruta = frutas.map((fruta) => {
    const obterFruta = fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();
    return obterFruta
});
console.log(executaBuscaFruta)