/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"
Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for falsa, retornar que a segundo parametro é maior que o primeiro. */

function CompararValor(numero1,numero2){
    if (numero1 > numero2){
        maiorNumero = numero1
    }else{
        maiorNumero = numero2
    }
    console.log(`O maior numero entre ${numero1} e ${numero2} é ${maiorNumero}`)
    return maiorNumero
}

CompararValor(3,9);