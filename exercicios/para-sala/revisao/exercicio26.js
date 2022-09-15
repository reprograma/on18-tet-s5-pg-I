/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */
 function retornaIdade(ano_nascimento) {
     const anoAtual = new Date().getFullYear()
     return anoAtual - ano_nascimento;
 }

 console.log(retornaIdade(1990));
 console.log(retornaIdade(2010));
 console.log(retornaIdade(2020));