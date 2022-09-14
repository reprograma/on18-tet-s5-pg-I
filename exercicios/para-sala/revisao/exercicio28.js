/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"
Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for falsa, retornar que a segundo parametro é maior que o primeiro. */
function compararNumero (a,b){
    if (a == b){
        console.log(`${a} é igual a ${b}`)
    }
    else if (a>b){
        console.log(`${a} é maior que ${b}`)
    }
    else{console.log(`${b} é maior que ${a}`)}
}

compararNumero(8,6)