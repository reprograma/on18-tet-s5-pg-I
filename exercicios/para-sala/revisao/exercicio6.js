/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log */

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