/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

<<<<<<< HEAD
 function imprimirIdade(anoNascimento) {
    anoAtual = new Date().getFullYear()
    return anoAtual - anoNascimento 
 }

console.log("Você tem", imprimirIdade(1958), 'anos.')


=======
function calcularIdade(anoNascimento) {
    let getAnoAtual = new Date().getFullYear();
    let calcularIdade = getAnoAtual - anoNascimento;

    return `A sua idade atual é ${calcularIdade}`

}

console.log(calcularIdade(1994));
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
