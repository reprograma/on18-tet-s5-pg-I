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
},];

/* Acesse a propriedade do objeto do terceiro item*/
<<<<<<< HEAD
//1ª resolução
// function acessarTerceiroObjeto(lista) {
//     lista.forEach(tarefa => {
//         let mostrarAfazeres = tarefa.afazeres
//         console.log(mostrarAfazeres);
//     })
// }

// acessarTerceiroObjeto(tarefas);

//2ª resolução
function imprimirTarefa(lista) {
    console.log(lista.reuniao);
}
tarefas.forEach(imprimirTarefa);
=======

let acessarTarefa = tarefas[0].reuniao

console.log(acessarTarefa)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
