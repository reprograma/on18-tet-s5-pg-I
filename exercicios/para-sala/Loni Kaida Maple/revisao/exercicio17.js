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

//let profissionaisTI = pessoas.map(profissionais => profissionais.area=="TI");

let profissionaisTI = pessoas.map(produto => {
    return{
        nome: produto.nome,
        area: produto.area,
        profissao: produto.profissao,
    }
    
});

for(b of profissionaisTI){
    if(pessoas.area=="TI")
        console.log(pessoas.nome);
}

//console.log(profissionaisTI)