// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];



// const frutas1 = frutas.map( frutas => frutas.toUpperCase());
// console.log(frutas1);



function retornarFrutasComPrimeiraLetraMaiuscula(listaDeFrutas, posicaoInicial, posicaoFinal) {
    let buscaFrutas = listaDeFrutas.map((fruta) => fruta[posicaoInicial].toUpperCase() + fruta.slice(posicaoFinal).toLowerCase())
    console.log(buscaFrutas);
}
retornarFrutasComPrimeiraLetraMaiuscula(frutas, 0, 1);