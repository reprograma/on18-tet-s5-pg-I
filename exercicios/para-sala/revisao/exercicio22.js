/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/
let numero = 50
for (i=0 ; i <= 50 ; i++){
    if ( i % 2 === 0){
        console.log(i,'número par:')
    }else{
        console.log(i,'número impar:')
    }
}