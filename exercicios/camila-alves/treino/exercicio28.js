/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"
Passo a passo da função:
Criar função compararValor(parametro1, parametro2)
Inserir uma condição onde parametro1 é maior que parametro dois?
Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
Se for falsa, retornar que a segundo parametro é maior que o primeiro. */


// Antes da Resolução:
function compararNumero(x, y) {
    if(x > y) {
        console.log(`O maior número entre ${x} e ${y} é ${x}`);
    } else { 
        console.log(`${y} é maior que ${x}`);
    }

}

compararNumero(500, 100)

// Depois da resolução:
/* a professora falou sobre boas práticas e sobre como deixar as código descritivo. Onde eu coloquei x e y eu poderia/deveria colocar numero1 e numero2 e sempre lembrar das possibilidades de dados que podem entrar */


function compararNumeros(numero1, numero2) {
    if(numero1 > numero2) {
        console.log(`O maior número entre ${numero1} e ${numero2} é ${numero1}`);
    } else if (numero1 == numero2) {
        console.log(`${numero1} é igual a ${numero2}`)
    } else { 
        console.log(`${numero2} é maior que ${numero1}`)
    }
}


compararNumeros(55, 55)