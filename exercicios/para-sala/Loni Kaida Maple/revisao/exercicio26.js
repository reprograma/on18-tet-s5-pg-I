/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

 function calcIdade(anoDeNascimento){
    let getyear = new Date().getFullYear();
    let aux = getyear-anoDeNascimento;
    console.log(aux);
 }

 calcIdade(2000);