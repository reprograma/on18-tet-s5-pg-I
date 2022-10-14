/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */




// Fiz junto com a resolução
function calcularIdade(anoNascimento) {

    let anoAtual = new Date().getFullYear();
    let calculoIdade = anoAtual - anoNascimento

    return console.log(`Sua idade é ${calculoIdade}`)

}

calcularIdade(1997)

