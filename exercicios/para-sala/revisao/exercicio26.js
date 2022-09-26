/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

 function idade(dia, mes, ano) {
    return new Date().getFullYear() - ano;
 }
 idade(11, 12,1980)

