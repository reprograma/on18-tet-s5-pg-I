/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

function imprimirNumeros(inicio, fim) {
    for (let numero = inicio; numero <= fim; numero++) {
        console.log(numero, numero % 2 == 0 ? 'é par' : 'é ímpar');
    }}
imprimirNumeros(0, 50);
