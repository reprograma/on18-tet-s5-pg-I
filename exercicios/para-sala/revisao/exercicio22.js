/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

// for (let numero = 0; numero <= 50; numero++) {
//     console.log(numero);
// }

// Primeira resolução:

// function imprimirNumeros(inicio, fim) {
//     for (let numero = inicio; numero <= fim; numero++) {
//         if (numero % 2 == 0) {
//             console.log(numero, 'Esse número é par')
//         } else {
//             console.log(numero, 'Esse número é ímpar')
//         }
//     }
// }
// imprimirNumeros(0, 50)

// Segunda resolução:

function imprimirParOuImpar(inicio, fim){
    for (let numero = inicio; numero<= fim ;numero++){
        console.log (numero,numero % 2 ==0 ? 'par' : 'impar');   
     }
}

imprimirParOuImpar(0,50)