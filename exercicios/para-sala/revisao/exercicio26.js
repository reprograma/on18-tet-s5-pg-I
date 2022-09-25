/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

//  function calcularIdade (anoDeNascimento){
//     let resultado = 2022 - anoDeNascimento
//     return resultado
//  }

//  console.log(calcularIdade(1979));

 function calcularIdade(anoDeNascimento){
   let getAnoAtual = new Date().getFullYear()
   let calcularIdade = getAnoAtual - anoDeNascimento

   return `A sua idade atual é ${calcularIdade}`
 }

 console.log(calcularIdade(1979));