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