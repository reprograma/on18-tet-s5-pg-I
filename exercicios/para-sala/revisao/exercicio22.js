/* Imprima os números de 0 a 50 e imprima se o número é par ou ímpar*/

let numero = 0

for (let numero = 0; numero <= 50; numero++){

    if (numero % 2 === 0){
        console.log(numero, "par");
    }else{
        console.log(numero, "ímpar");
    }
}

console.log("------------");

let num = 50;

for (let i = 0; i <= num; i++) {

    if (i % 2 === 0) {
        console.log(i, "par");
    } else {
        console.log(i, "ímpar");
    }
}

console.log("------------");

function imprimirParOuImpar(inicio, fim){
    for (let numero = inicio; numero <= fim ;numero++){
        console.log (numero,numero % 2 ==0 ? 'par' : 'impar');   
     }
}

imprimirParOuImpar(0,50)

console.log("------------");