//Retonar uma nova array com o nome das alunas com a nota final
const notasAlunas = [
    {
        nome: "Julia",
        notas: [
            { materia: "matemática", nota: 7, peso: 1.5 },
            { materia: "portugues", nota: 3, peso: 2 }
        ]
    },
    {
        nome: "Zelia",
        notas: [
            { materia: "matemática", nota: 6, peso: 1.5 },
            { materia: "portugues", nota: 5, peso: 2 }
        ]
    },
    {
        nome: "Jussara",
        notas: [
            { materia: "matemática", nota: 8, peso: 1.5 },
            { materia: "portugues", nota: 2, peso: 2 }
        ]
    }
]

// const nomesAlunas = notasAlunas.map(function(item){
//     return{
//         nomeAluna : item.nome,
//         notaAluna : item.notas.map(function(valor) {
//             return{
//                 nota : valor.peso[0]
//             }
//         })
//     }
// })

// console.log(nomesAlunas);

for (let i of notasAlunas) {
    console.log(["A aluna " + i.nome + " tirou " + ((i.notas[0].nota * i.notas[0].peso) + (i.notas[1].nota * i.notas[1].peso))/2 + " na nota final."]);
}
