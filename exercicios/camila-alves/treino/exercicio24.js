//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
    nomeResidente: "Camila",
    sobrenome: "Alves",
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

// Antes da resolução sem as propriedades (nomeResidente e sobrenome):

function informarDados(dado) {

    let  nomeCidade = dado.cidade
    let nomeBairro = dado.bairro
    let nomeEstado = dado.uf
    let nomeRua = dado.rua
    let numeros = dado.numero

    return console.log("A Camila mora na cidade de " + nomeCidade + ", no bairro do " + nomeBairro +  ", no Estado de " + nomeEstado + ", na rua " + nomeRua + ", com os números " + numeros)

}

informarDados(endereco)

// Depois da resolução:

function getInfo(info) {
    console.log(`A ${info.nomeResidente} ${info.sobrenome} mora na cidade de ${info.cidade}, no bairro de ${info.bairro}/${info.uf}, na rua de ${info.rua}, no numero de ${info.numero}.`)

}

getInfo(endereco)