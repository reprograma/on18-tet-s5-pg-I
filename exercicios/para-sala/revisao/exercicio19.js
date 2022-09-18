//Organizar pessoas por ordem alfabética

const colaboradores = ["Camila", "Kalliandra", "Julia", "Janny", "Eliene", "Brizza", "Jéssica"];
const pessoas = [
    { nome: "Mell", area: "TI", profissao: "dev" },
    { nome: "Munique", area: "ciência", profissao: "pesquisadora" },
    { nome: "Melissa", area: "construção", profissao: "engenheira" },
    { nome: "Madalena", area: "TI", profissao: "infra" },
    { nome: "Monica", area: "medicina", profissao: "cardiologista" },
];

const listarOrdemAlfabetica = colaboradores.sort();

const listarOrdemAlfabeticaSpread = [...colaboradores].sort((a, b) => a - b);


//ler sobre sort, entender melhor o mecanismo.
const listarOrdemAlfabeticaCondicional = [...pessoas].sort((a, b) => {
    if (a.nome < b.nome) {
        console.log("a", a.nome)
        console.log("b", b.nome)
        return -1;
    } else if (a.nome > b.nome) {
        console.log("a do else if", a.nome);
        console.log("b do else if", b.nome)
        return 1;
    } else {
        console.log("a do else", a.nome);
        console.log("b do else", b.nome)
        return 0;
    }

})