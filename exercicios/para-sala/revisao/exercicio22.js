/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/
function parOuImpar (num){
    if (num % 2 == 0){
        console.log(`${num} é par`)
    }
    else {
        console.log(`${num} é impar`)
    }
}

for (let i=0; i<=50; i++){
    parOuImpar(i)
}