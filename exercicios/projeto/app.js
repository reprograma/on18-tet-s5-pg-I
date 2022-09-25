const read = require('readline-sync');
const getListaDesejo = require('./getListaDesejo');
const getCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');
const getLivroRecomendado = require('./getLivroRecomendado');

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDERNAR: Buscar livros de forma ordenada;
3 - RECOMENDADOS: Buscar livros recomendados;
4 - LISTA DE DESEJOS: Buscar livros desejados;
5 - SAIR

`);

switch (menuOpcoes) {
    case '1':
       getCategoria()
       console.log("Busca por categoria");
    break;
    case '2':
        getLivroOrdenado()
        console.log("Busca por livros");
    break;
    case '3':
        getLivroRecomendado()
        console.log("Busca por recomendacao");
    break;
    case '4':
        getListaDesejo() 
        console.log("Busca por lista de desejos")
    break;
    default:
        console.log("Fim do algoritmo")
    break;
}