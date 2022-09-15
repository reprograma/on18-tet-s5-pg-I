/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"
Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for falsa, retornar que a segundo parametro é maior que o primeiro. */
function compararNumero(n1, n2) {
    if( n1 > n2 ) {
        return `O maior número entre ${n1} e ${n2} é ${n1}`;
    } else {
        return `O maior número entre ${n1} e ${n2} é ${n2}`;
    }
}

console.log(compararNumero(1,10));
console.log(compararNumero(100,10));
console.log(compararNumero(10,10));