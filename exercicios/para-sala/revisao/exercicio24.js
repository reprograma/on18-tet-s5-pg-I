//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
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

let nome = "Adriana"
let sobrenome = "Gutierrez"

// function etiqueta(nome, sobrenome){
//     return(`${nome} ${sobrenome} "mora em" ${endereco.bairro} "/"`)
// }

console.log(`A ${nome} ${sobrenome} mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com nº ${endereco.numero} `);

function getInfo(item){
    console.log(`Adriana mora em ${item.cidade}/${item.uf}, no bairro ${item.bairro}, na ${item.rua}, com nº${item.numero}.`)}
    
getInfo(endereco);
    