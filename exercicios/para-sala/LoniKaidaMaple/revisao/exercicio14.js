/*O map() funciona retornando uma nova array após a aplicação de uma função em todos os elementos da array.
Dado um array de objetos chamado produtos: */

let produtos = [
    { id: 123, nome: 'Camiseta', cor: 'azul', tamanho: 'P', categoria: 'Vestuário', estoque: 10, disponivel: true, precoUnitario: 15 },
    { id: 125, nome: 'Regata', cor: 'azul', tamanho: 'GG', categoria: 'Vestuário', estoque: 0, disponivel: false, precoUnitario: 20 },
    { id: 456, nome: 'Calça', cor: 'preto', tamanho: 'GG', categoria: 'Vestuário', estoque: 1, disponivel: true, precoUnitario: 15 },
    { id: 982, nome: 'Tênis', cor: 'amarelo', tamanho: '38', categoria: 'Esportes', estoque: 2, disponivel: true, precoUnitario: 125 },
];

/*Retorne uma nova array com o id do produto,
 nome, tamanho e preço unitário que terá o acréscimo de 1.15 sobre o valor dos produtos.*/

//<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio14.js
 //const nProducts = produtos.map(precoUnitario => (precoUnitario=precoUnitario+1.15));

 // cria uma nova array com as prorpiedades que selecionou//
 let newProducts = produtos.map(produto => {
    return{
        id: produto.id,
        nome: produto.nome,
        tamanho: produto.tamanho,
        precoUnitario: produto.precoUnitario += 1.15
    }
    
}
);

console.table(newProducts);
//=======
const modificarValorProduto = produtos.map((produto) => {
    return {
        id: produto.id,
        nome: produto.nome,
        preco: produto.precoUnitario * 1.15
    }
})

console.log(modificarValorProduto)
//>>>>>>> 764dc6af21ddba7be5add8c1d7ab8e45e0fa8913:exercicios/para-sala/revisao/exercicio14.js
