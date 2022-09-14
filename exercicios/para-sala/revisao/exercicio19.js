//Organizar pessoas por ordem alfabética
const pessoas = [
    { nome: "Mell", area: "TI", profissao: "dev" },
    { nome: "Munique", area: "ciência", profissao: "pesquisadora" },
    { nome: "Melissa", area: "construção", profissao: "engenheira" },
    { nome: "Madalena", area: "TI", profissao: "infra" },
    { nome: "Monica", area: "medicina", profissao: "cardiologista" },
];
let pessoasAlf = pessoas[1].nome.sort()
console.log(pessoasAlf)

//não sei usar sort acessando apenas um index de uma array de objetos
//tentei de tudo e procurei na internet e não consigo fazer funcionar
