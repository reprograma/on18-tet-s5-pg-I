// 2) Retornar frutas com somente a primeira letra maiúscula

const frutas = ["maçã", "banana", "Pêra", "Melancia", "pêsSSEgO", "jAcA"]
function retornarFrutasComPrimeiraLetraMaiuscula(lista, indice0, indice1) {
    let buscaFrutas = lista.map((fruta) => fruta[indice0].toUpperCase() + fruta.slice(indice1).toLowerCase())
    console.log(buscaFrutas);
}
retornarFrutasComPrimeiraLetraMaiuscula(frutas, 0, 1);

