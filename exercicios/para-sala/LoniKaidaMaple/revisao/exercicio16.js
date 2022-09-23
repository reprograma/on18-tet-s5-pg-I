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

//<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio16.js

let alunas = notasAlunas.map(aluna => {
    return{
        nome: aluna.nome,
        notaFinal: (aluna.notas[0].nota * aluna.notas[0].peso)+(aluna.notas[1].nota * aluna.notas[1].peso),
    }
}
);

console.table(alunas);

///nf=nn*np
//=======
const notasFinaisAlunas = notasAlunas.map((aluna) => {

    const arrNotas = aluna.notas;

    let somaNotas = 0;
    let somaPeso = 0;

    for (let i = 0; i < arrNotas.length; i++) {

        const nota = arrNotas[i].nota;
        const peso = arrNotas[i].peso;

        const notaFinalMateria = nota * peso;


        somaNotas += notaFinalMateria;
        somaPeso += peso;
        //matematicamente: (nota1*peso1)+(nota2*peso2)/(peso1+peso2)


    }

    //matematicamente: (nota1*peso1)+(nota2*peso2)/(peso1+peso2)
    const notaFinalAluna = somaNotas / somaPeso

    const resultadoTotal = {
        nome: aluna.nome,
        notaFinal: notaFinalAluna.toFixed(2)
    }

    return resultadoTotal

})

console.log(notasFinaisAlunas)
//>>>>>>> 764dc6af21ddba7be5add8c1d7ab8e45e0fa8913:exercicios/para-sala/revisao/exercicio16.js
