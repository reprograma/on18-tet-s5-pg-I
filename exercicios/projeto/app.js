const read = require('readline-sync');
const getCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');
const getLivrosRecomendado = require('./getLivrosRecomendados');
const getLivrosNaoLidos = require('./getLivrosNaoLidos');

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma crescente por numero de paginas; 
3 - ORDENAR: Buscar livros por recomendacao;
4 - ORDENAR: Buscar livros que nao foram lidos;
5 - SAIR 
`);


switch (menuOpcoes) {
    case '1':
        getCategoria()
        break;
    case '2':
        getLivroOrdenado()
        break;
    case '3':
        getLivrosRecomendado()
        break;
    case '4':
        getLivrosNaoLidos()
        break;
    default:
        console.log("Obrigada pela visita, volte sempre! SAIR")
        break;
}