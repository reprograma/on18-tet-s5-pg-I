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


let alunas = notasAlunas.map(aluna => {
    return{
        nome: aluna.nome,
        notaFinal: (aluna.notas[0].nota * aluna.notas[0].peso)+(aluna.notas[1].nota * aluna.notas[1].peso),
    }
}
);

console.table(alunas);

///nf=nn*np