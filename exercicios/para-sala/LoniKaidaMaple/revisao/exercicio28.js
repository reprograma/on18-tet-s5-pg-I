/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"
Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for falsa, retornar que a segundo parametro é maior que o primeiro. */

//<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio28.js
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
//=======

function compararNumero(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`O ${numero1} é maior que o ${numero2}`);
    } else if (numero1 == numero2) {
        console.log("Os números são iguais")
    } else {
        console.log(`O ${numero2} é maior que o numero ${numero1}`);
    }
}
compararNumero(66, 66);
//>>>>>>> 764dc6af21ddba7be5add8c1d7ab8e45e0fa8913:exercicios/para-sala/revisao/exercicio28.js
