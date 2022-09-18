/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log */

<<<<<<< HEAD
// Primeira resolução:

// const curso = {
//     nome : "Brizza",
//     periodo : "Primeiro",
//     professora : "Jess"
// }

// console.log(curso.nome, curso.periodo, curso.professora)
// console.log(curso.nome)
// console.log(curso.periodo)
// console.log(curso.professora)

// Segunda resolução:

function apresentacaoCurso(nome, periodo, professora) {
    let curso = {
        nome: nome,
        periodo: periodo,
        professora: professora
    }
    console.log(`O nome do curso é: ${curso.nome};`);
    console.log(`O período do curso é: ${curso.periodo};`);
    console.log(`O nome da professora é : ${curso.professora}.`);
}

apresentacaoCurso("Reprograma", "2022.2", "Lilit")
=======
let curso = {
    nome: "Lógica de Programação",
    periodo: "Noturno",
    professoras: ["Jéssica", "Ana Beatriz", "Júlia"]
}

console.log(curso.professoras)
    //console.log(curso.professoras[professoras].length - 1)
console.log(curso.periodo)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
