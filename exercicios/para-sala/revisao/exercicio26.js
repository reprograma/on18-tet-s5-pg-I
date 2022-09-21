/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

 function imprimirIdade(anoNascimento) {
    anoAtual = new Date().getFullYear()
    return anoAtual - anoNascimento 
 }

console.log("Você tem", imprimirIdade(1958), 'anos.')


