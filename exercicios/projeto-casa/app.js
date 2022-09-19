const read = require('readline-sync');
const getCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');
const getLivroRecomendado = require('./getLivroRecomendado.js')
const getLivroNaoLidos = require('./getLivroNaoLidos');
const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma ordenada; 
3 - ORDERNAR: Buscar livros recomendados;
4 - ORDERNAR: Buscar por livros nao lidos; 
`);


switch (menuOpcoes) {
    case '1':
        getCategoria()
        break;
    case '2':
        getLivroOrdenado()
        break;
        case'3':
        getLivroRecomendado()
        break;
        case '4':
            getLivroNaoLidos()
    default:
        console.log("Obrigada pela visita, volte sempre!")
        break;
}