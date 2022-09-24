//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
    nomeResidente: "Katia Firmino ",
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

/*Retorne o seguinte conteúdo:*
A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
O retorno deverá ser template string*/


function getInfo (info) {
    console.log(`A ${info.nomeResidente} mora em ${info.cidade}/${info.uf},no bairro ${info.bairro},na rua ${info.rua} n° ${info.numero}.
    `)
}
getInfo(endereco)