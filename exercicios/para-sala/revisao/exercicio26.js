/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

 let aniversárionova = anoAtual = 2022, nascimento= 1994;
 let idade = anoAtual - nascimento;{
 console.log(idade, "anos, idade atual de Letícia");
}

//OK!


function calcularIdade(anoNascimento) {
    let getAnoAtual = new Date().getFullYear();
    let calcularIdade = getAnoAtual - anoNascimento;

    return `A sua idade atual é ${calcularIdade}`

}

console.log(calcularIdade(1994));

// RESOLUÇÃO PROFESSORA

