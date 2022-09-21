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


<<<<<<< HEAD
function colocarEndereco(nome, sobrenome, endereco) {
        console.log(`A ${nome} ${sobrenome} mora em ${endereco.cidade} / ${endereco.uf}, no bairro do ${endereco.bairro}, na rua "${endereco.rua}" com n° ${endereco.numero}. `)
    }
colocarEndereco("Rachel", "Lizandra", endereco)

=======
function getInfo(info) {
    console.log(`A ${info.nomeResidente} Lima mora em ${info.cidade}/${item.uf},no bairro ${info.bairro}, na ${item.rua}, com nº${item.numero}.`)
}

getInfo(endereco);
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
