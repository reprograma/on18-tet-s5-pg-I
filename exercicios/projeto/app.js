const read = require('readline-sync');
const getLivroCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');
const getLivroNaoLido = require('./getLivroNaoLido');
const getLivroRecomendado = require('./getLivroRecomendado');


const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma ordenada por paginas; 
3 - NAO LIDOS: Buscar por livros que nao foram lidos;
4 - RECOMENDADOS: Buscar por livros que foram lidos e sao recomendados;
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
        getLivroNaoLido()
        break;
    case '4':
        getLivroRecomendado()
        break
    case '5':
        console.log("SAIR")
        break;
    default:
        console.log("Fim do algoritimo")
        break;
}