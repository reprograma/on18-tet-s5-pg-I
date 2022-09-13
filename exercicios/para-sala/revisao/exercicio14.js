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

 

//  let newProdutos=produtos.map(allProdutos=> {
//   let nomeProduto=allProdutos.nome;
//   let tamanhoProduto=allProdutos.tamanho;
//   let precoUnitarioProduto=allProdutos.precoUnitario+1.15

//   console.log(nomeProduto)
//   console.log(tamanhoProduto)
//   console.log('------',precoUnitarioProduto,'-------')
// })



//outro jeito

// const produtoNovoValor = produtos.map(produto => {
//   const novoValor = [produto.id, produto.nome, produto.tamanho, produto.precoUnitario*1.15]
//   return novoValor
// })

// console.table(produtoNovoValor)

function listaNovosValores(lista) {
  const produtoNovoValor = lista.map(produto => {
      const novoValor = [produto.id, produto.nome, produto.tamanho, produto.precoUnitario*1.15]
      return novoValor
    })
    
    console.table(produtoNovoValor)
    
}
listaNovosValores(produtos)