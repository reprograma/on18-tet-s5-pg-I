//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
    nomeResidente: "Kalliandra",
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


function getInfo(info) {
    console.log(`A ${info.nomeResidente} Lima mora em ${info.cidade}/${item.uf},no bairro ${info.bairro}, na ${item.rua}, com nº${item.numero}.`)
}

getInfo(endereco);