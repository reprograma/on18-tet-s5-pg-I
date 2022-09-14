/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

 function calcularIdade (nasc){
  let dataAtual = new Date()
  let anoAtual = dataAtual.getFullYear()
  let idade = anoAtual-nasc
  console.log(idade)
 }

 calcularIdade(1989)