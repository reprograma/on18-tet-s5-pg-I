/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

var contador = 0;

for(let contador = 0; contador <= 50; contador++){
    
    if (contador % 2 == 0){
        console.log(contador + " é par")
    }else{
        console.log(contador + " é ímpar")
    }
}