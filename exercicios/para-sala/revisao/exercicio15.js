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
// let procurar = Object.values(tarefas.find((item) => item.reuniao))
// console.log(procurar) //PROCURA OS VALORES DAS PROPRIEDADES DA ARRAY

let procurar = Object.values(tarefas.map((item) => item.reuniao))
console.log(procurar)

// let procuraPropriedade = tarefas.find((item) => item.reuniao)
// console.log(procuraPropriedade) //PROCURA PROPRIEDADES E VALORES DA ARRAY
=======
let acessarTarefa = tarefas[0].reuniao

console.log(acessarTarefa)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
