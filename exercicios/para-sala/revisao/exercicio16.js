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

// media = nota1 * 1,5 + nota2 * 2 / 3,5
//let notaFinal = nota * peso / 3.5

const novaNota = notasAlunas.map(function(aluna){
    const notas = nota * peso
    const mediaFinal = [aluna.nome , aluna.notas / 3.5]
    return mediaFinal;
})
console.log(novaNota)

function nota 