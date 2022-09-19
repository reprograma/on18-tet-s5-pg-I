//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
<<<<<<< HEAD

=======
const endereco = {
    nomeResidente: "Kalliandra",
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a

/*Retorne o seguinte conteúdo:*
A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
O retorno deverá ser template string*/

<<<<<<< HEAD
function retornarEndereço(nome, sobrenome, cidade, uf, bairro, rua, numero) {
    const endereco = {
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        uf: uf
    };
    console.log(`A aluna ${nome} ${sobrenome} mora em ${cidade}/${uf}, no bairro ${bairro}, na ${rua} com nº ${numero}.`)
}
retornarEndereço("Grazielle", "Torres", "São Paulo", "SP", "Centro", "Rua dos Pinheiros", "1293")
=======

function getInfo(info) {
    console.log(`A ${info.nomeResidente} Lima mora em ${info.cidade}/${item.uf},no bairro ${info.bairro}, na ${item.rua}, com nº${item.numero}.`)
}

getInfo(endereco);
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
