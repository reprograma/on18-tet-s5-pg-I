const read = require('readline-sync');
const getLivroCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');
const getLivrosRecomendados = require('./getLivrosRecomendados');
const getLivrosNaoLidos = require('./getLivrosNaoLidos')

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros por número de páginas;
3 - RECOMENDADOS: Listar livros pelas suas recomendações; 
4 - NÃO LIDOS: Listar livros ainda não lidos
5 - SAIR 
`);


switch (menuOpcoes) {
    case '1':
        getLivroCategoria()
        break;
    case '2':
        getLivroOrdenado()
        break;
    case '3':
        getLivrosRecomendados()
        break;
    case '4':
        getLivrosNaoLidos()
        break;
    default:
        console.log("SAIR")
        break;
}