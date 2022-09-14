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
function calcNotaFinal (aluna) {
    console.log(aluna.nome)
    let notaFinalMat = aluna.notas[0].nota * aluna.notas[0].peso
    console.log(`Nota Final (Matemática): ${notaFinalMat}`)
    let notaFinalPort = aluna.notas[1].nota * aluna.notas[1].peso
    console.log(`Nota Final (Português): ${notaFinalPort}`)
    console.log("=======================")
}
//calcNotaFinal(notasAlunas[2])
let notasFinal = notasAlunas.forEach(calcNotaFinal)