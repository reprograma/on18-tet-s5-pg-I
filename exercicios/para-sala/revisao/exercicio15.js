/*Dado um array de objetos.
 */

const tarefas = [{
    passear: false,
    afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado",
        "Descansar"
    ],
    reuniao: {
        faculdade: "Segunda-feira",
        amigos: "Sexta-feira"
    },
}, ];

/* Acesse a propriedade do objeto do terceiro item*/

<<<<<<< HEAD
let acessarTarefa = tarefas[0].reuniao

console.log(acessarTarefa)
=======
let terceiroItem = (tarefas.reuniao[2]);
console.log(terceiroItem)
>>>>>>> 6b8307fbbc2f26c79ebf41ceb8c316a0801ef102
