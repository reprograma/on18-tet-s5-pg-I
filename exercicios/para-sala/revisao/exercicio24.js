//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

const pessoa={
    nome:'Ellen',
    sobrenome:'Nunes'
}
/*Retorne o seguinte conteúdo:*
A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
O retorno deverá ser template string*/

console.log(`A pessoa ${pessoa.nome}, ${pessoa.sobrenome} mora em ${endereco.cidade} no bairro ${endereco.bairro} na rua ${endereco.rua} 
com o numero ${endereco.numero}` )