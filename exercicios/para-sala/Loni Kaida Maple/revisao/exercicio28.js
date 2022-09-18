/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"
Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for falsa, retornar que a segundo parametro é maior que o primeiro. */

function checkNumber(n1, n2){
    if(n1<n2){
        console.log(n2+" é Maior que "+ n1);
    }else if(n1>n2){
        console.log(n1+" é Maior que "+ n2);
    }
    else{
        console.log(n2+" são iguais "+ n1);
    }
}

checkNumber(666,666);