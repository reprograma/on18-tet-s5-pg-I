//Organizar pessoas por ordem alfabética

const colaboradores = ["Kalliandra", "Julia", "Janny", "Eliene", "Brizza", "Jéssica", "Camila"];
const pessoas = [
    { nome: "Mell", area: "TI", profissao: "dev" },
    { nome: "Munique", area: "ciência", profissao: "pesquisadora" },
    { nome: "Melissa", area: "construção", profissao: "engenheira" },
    { nome: "Madalena", area: "TI", profissao: "infra" },
    { nome: "Monica", area: "medicina", profissao: "cardiologista" },
];

/* Lembrar depois: essas arrays a prof criou na aula... Mas na hora do fork, elas já vieram... Fiz o exercício nas duas arrays.
Lembrar: ** Na resolução, a prof. usou o sort() e passou parâmetros tempo do vídeo: 00:00:00 - 00:32:03. Também fez uma resolução usando o spread.
*/

// Antes da resolução(está ok):
let listePorOrdem = colaboradores.sort()
console.log(listePorOrdem)

let acessaOsNomes = pessoas.map((item) => item.nome)
let mostreOsNomesEmOrdem = acessaOsNomes.sort()

console.log(mostreOsNomesEmOrdem)


// Com a resolução:


let listePorOrdemAlfabetica = [...colaboradores].sort()

console.log(listePorOrdemAlfabetica)