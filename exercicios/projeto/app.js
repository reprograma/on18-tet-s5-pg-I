const read = require('readline-sync');
const getLivroCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma ordenada; 
3 - SAIR 
`);


switch (menuOpcoes) {
    case '1':
        getLivroCategoria()
        break;
    case '2':
        getLivroOrdenado()
        break;
    default:
        console.log("SAIR")
        break;
}