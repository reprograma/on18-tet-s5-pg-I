/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

let numero = 0


for (let numero = 0; numero <= 50; numero++){


    if (numero % 2 === 0){
        console.log(numero, "par");
    }else{
        console.log(numero, "ímpar");
    }
}


