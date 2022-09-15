/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

const alunos = [{
    nome: "Pedro",
    nota: 78
},
{
    nome: "Ana",
    nota: 87
},
{
    nome: "Kalliandra",
    nota: 88
},
{
    nome: "Matheus",
    nota: 75
}
]

    function notaFinal(lista){
        for(aluno of lista)
        if(aluno.nota >= 90){
          console.log(`${aluno.nome} tirou A na prova de hoje`)
        }else if(aluno.nota >=80 && aluno.nota < 90){
          console.log(`${aluno.nome} tirou B na prova de hoje`)
        }else if(aluno.nota >= 70 && aluno.nota < 80){
            console.log(`${aluno.nome} tirou C na prova de hoje`)
        }else if(aluno.nota >= 65 && aluno.nota < 70){
            console.log(`${aluno.nome} tirou D na prova de hoje`)
        }else{
            console.log(`${aluno.nome} tirou F na prova de hoje`)
        }
    }

    notaFinal(alunos)