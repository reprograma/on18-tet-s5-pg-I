// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
    { nome: "Mell", area: "TI", profissao: "dev" },
    { nome: "Munique", area: "ciência", profissao: "pesquisadora" },
    { nome: "Melissa", area: "construção", profissao: "engenheira" },
    { nome: "Madalena", area: "TI", profissao: "infra" },
    { nome: "Monica", area: "medicina", profissao: "cardiologista" },
];

// expectativa:
// const profissionaisTI = [
//   { nome: "Mell", area: "TI", profissao: "dev" },
//   { nome: "Madalena", area: "TI", profissao: "infra" }
// ];

<<<<<<< HEAD
function retornoPorCategoriaProfissional(lista, area) {
    let retornoProfissional = lista.filter((lista) => lista.area == area)
    console.table(retornoProfissional);
}

retornoPorCategoriaProfissional(pessoas, "TI")
=======
const getProfissionalTI = pessoas.filter((pessoa) => {
    const isTI = pessoa.area == "TI";

    return isTI
})

console.log(getProfissionalTI)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
