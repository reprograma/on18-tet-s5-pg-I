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

function calcularFinal(notas) {
    let notasComPeso = notas.map((nota) => nota.nota * nota.peso) 
    let notaSoma = notasComPeso.reduce((acumulador, atual) => acumulador + atual)
    let notaFinal = notaSoma / notasComPeso.length
    return notaFinal
}


const notasFinais = notasAlunas.map((aluna) => ({
  nome: aluna.nome,
  nota: calcularFinal(aluna.notas),
}));

console.log(notasFinais)
