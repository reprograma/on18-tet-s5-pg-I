/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

function calcularIdade(anoNascimento) {
    let getAnoAtual = new Date().getFullYear();
    let calcularIdade = getAnoAtual - anoNascimento;

    return `A sua idade atual é ${calcularIdade}`

}

console.log(calcularIdade(1994));