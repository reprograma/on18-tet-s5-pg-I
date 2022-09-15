/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

 const pessoa = {
    nome: "Luiz",
    cidade: "Recife",
    ano: 1987
 }

 function anos(item){
    console.log(`${item.nome} tem`,(2022 - item.ano), 'anos')
 }

 anos(pessoa)