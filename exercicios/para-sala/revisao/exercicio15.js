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


// console.log(this.afazeres)
// tarefas.forEach(valor=>{
//     let afazeresIndices=valor.afazeres[2]
//     console.log(afazeresIndices)})

function imprimirTarefa(lista){
    console.log(lista.reuniao);

}
tarefas.forEach(imprimirTarefa)


