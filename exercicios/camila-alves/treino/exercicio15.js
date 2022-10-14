/*Dado um array de objetos.
 */

const tarefas = [{
    passear: false,
    afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado", "Descansar"],
    reuniao: {faculdade: "Segunda-feira",amigos: "Sexta-feira"},
}, ];

/* Acesse a propriedade do objeto do terceiro item*/

let acesso = tarefas[0].reuniao

console.log(acesso)

/* Lembrar depois: essa é uma array, com um único elemento e esse elemento é um objeto, então é como se eu dissesse vá na minha array tarefas, acesse o elemento 0, que é um objeto e é primeiro elemento, e me mostre o que tem na chave reuniao.
*/