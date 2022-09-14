//Retonar uma nova array com o nome das alunas com a nota final
const notasAlunas = [{
        nome: "Julia",
        notas: [
            { materia: "matemática", nota: 7, peso: 1.5 },
            { materia: "portugues", nota: 3, peso: 2 },
        ],
    },
    {
        nome: "Zelia",
        notas: [
            { materia: "matemática", nota: 6, peso: 1.5 },
            { materia: "portugues", nota: 5, peso: 2 },
        ],
    },
    {
        nome: "Jussara",
        notas: [
            { materia: "matemática", nota: 8, peso: 1.5 },
            { materia: "portugues", nota: 2, peso: 2 },
        ],
    },
];

const notaFinalAlunas = notasAlunas.map((aluna) => {
    let notaFinal = 0;
    for (let i = 0; i < aluna.notas.length; i++) {
        notaFinal += (aluna.notas[i].nota * aluna.notas[i].peso) / 2;
    }
    return {
        nome: aluna.nome,
        notaFinal: notaFinal,
    };
});
console.table(notaFinalAlunas);