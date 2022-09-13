/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

function parimpar(inicio, fim){
    for(let numero = inicio; numero <= fim; numero++) {

    
    if (numero % 2 == 0) {
       console.log(numero,"par!")
    } else {
       console.log(numero, "impar!")
    }
    // console.log(parimpar(50))
    }
}
parimpar(0, 50);