const read = require('readline-sync');
const buscarLivros = require('./getLivroCategoria');
const listarLivrosOrdenados = require('./getLivroOrdenado');
const listarRecomendados = require('./getLivroRecomendado');
const listarLivrosNaoLidos = require('./getLivronaoLido');

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma ordenada; 
3 - RECOMENDADOS: Buscar livros recomendados;
4 - LISTA DE DESEJOS: Buscar lista de desejos; 
5 - SAIR 
`);


switch (menuOpcoes) {
    case '1':
        buscarLivros()
        break;
    case '2':
        listarLivrosOrdenados()
        break;
    case '3':
        listarRecomendados()
        break;
    case '4':
        listarLivrosNaoLidos()
        break;
    default:
        console.log("SAIR")
        break;
}