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
<<<<<<< HEAD
 
//acréscimo de 1.15%
function atualizarPrecoProduto(lista) {
    const produtosNovoValor = lista.map(produto => {
        const novoValor = [produto.id, produto.nome, produto.tamanho, produto.precoUnitario + 1.15
        ]
        return novoValor
    })
    console.table(produtosNovoValor)
}
atualizarPrecoProduto(produtos);

//acréscimo de 1.15 reais
function atualizarPrecoProduto(lista) {
    const produtosNovoValor = lista.map(produto => {
        const novoValor = [produto.id, produto.nome, produto.tamanho, produto.precoUnitario * 1.15
        ]
        return novoValor
    })
    console.table(produtosNovoValor)
}
atualizarPrecoProduto(produtos);
=======

const modificarValorProduto = produtos.map((produto) => {
    return {
        id: produto.id,
        nome: produto.nome,
        preco: produto.precoUnitario * 1.15
    }
})

console.log(modificarValorProduto)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
