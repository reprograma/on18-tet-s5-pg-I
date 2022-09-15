/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */
 
 function Aniversario(nascimento){
    let DataAno = new Date();
    anoAtual = DataAno.getFullYear();

    let aniversario = anoAtual - nascimento
    return aniversario
 }

console.log(Aniversario(1996))