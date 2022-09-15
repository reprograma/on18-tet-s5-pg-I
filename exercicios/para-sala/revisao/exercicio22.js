/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

/*const numeros = 
(1 ,2 ,3, 4 ,5 ,6, 7 , 8 , 9 ,10 ,
11, 12, 13 ,14 ,15 ,16 ,17 ,18 ,19 ,20
,21 , 22, 23, 24, 25, 26, 27, 28, 29, 30,
31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
41, 42, 43 ,44 ,45, 46, 47, 48, 49 , 50)*/

exibirNumeros(50);

function exibirNumeros(limite){
    for(let numero = 2; numero<= limite; numero++){
        let primo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                primo = false;
                break;
            }
        }
        if(primo) console.log(numero)
    }
}




