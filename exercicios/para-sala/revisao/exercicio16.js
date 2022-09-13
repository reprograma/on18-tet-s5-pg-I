//Retonar uma nova array com o nome das alunas com a nota final
const notasAlunas = [{
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

// let somatorio=0
// let allAlunas=notasAlunas.map(alunas=> {
//     let nomeAluna=alunas.nome
//     let notaFinal=0


//     for(let i=0; i<alunas.notas.length; i++){
//        notaFinal+=alunas.notas[i].nota*alunas.notas[i].peso/2


//     }
//     return console.log(nomeAluna,notaFinal)


// })

// function notasEscola (nota){
const notaFinalAlunas = notasAlunas.map(aluna => { 
    let notaFinal = 0
    for (let i = 0; i < aluna.notas.length; i++){
notaFinal += aluna.notas[i].nota * aluna.notas[i].peso/2
    }
    return {
        nome: aluna.nome,
        notaFinal: notaFinal
}})
console.table(notaFinalAlunas)
// }
// notasEscola(notasAlunas)