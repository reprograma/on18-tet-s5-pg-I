/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log */

/*let curso = {
    nome: "Alane",
    período: "3",
    professora: "Grazi"
}
console.log(curso.nome);
console.log(curso.período);
console.log(curso.professora);

*/
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

apresentacaoCurso("Reprograma", "2022.2", "Lilit");
