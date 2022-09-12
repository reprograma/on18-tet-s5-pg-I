// 2) Retornar frutas com somente a primeira letra maiúscula

const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

function retornarFrutaPrimeiraLetraMaiuscula(lista, indice0, indice1) {
    let buscarFrutas = lista.map((fruta) => fruta[indice0].toUpperCase()+fruta.slice(indice1).toLowerCase())
    console.log(buscarFrutas);
    
}
retornarFrutaPrimeiraLetraMaiuscula(frutas, 0, 1);


