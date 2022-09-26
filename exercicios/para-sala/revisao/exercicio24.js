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


function colocarEndereco(nome, sobrenome, endereco) {
        console.log(`A ${nome} ${sobrenome} mora em ${endereco.cidade} / ${endereco.uf}, no bairro do ${endereco.bairro}, na rua "${endereco.rua}" com n° ${endereco.numero}. `)
    }
colocarEndereco("Rachel", "Lizandra", endereco)

