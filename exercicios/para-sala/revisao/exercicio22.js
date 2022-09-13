/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

//1ª resolução:
// function imprimirNumeros(inicio, fim) {
//     for (let numero = inicio; numero <= fim; numero++) {
//         if (numero % 2 == 0) {
//             console.log(numero, 'Esse número é par')
//         } else {
//             console.log(numero, 'Esse número é ímpar')
//         }
//     }
// }

// imprimirNumeros(0, 50);
//2ª resolução:
function imprimirNumeros(inicio, fim) {
    for (let numero = inicio; numero <= fim; numero++) {
        console.log(numero, numero % 2 == 0 ? 'é par' : 'é ímpar');
    }
}

imprimirNumeros(0, 50);
