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

// Primeira resolução:

// console.log(tarefas[0].reuniao)

// Segunda resolução:

// function acessarTerceiroObjeto (lista){
//     lista.forEach(tarefas=>{
//  let afazeresIndices = tarefas.reuniao
//  console.log(afazeresIndices)})
//  }

//  acessarTerceiroObjeto(tarefas)

//  Terceira resolução:

function imprimirTarefa(lista) {
    console.log(lista.reuniao);
}
tarefas.forEach(imprimirTarefa);