//Dependencias------------------------------------------------//
const read = require("readline-sync");
const getCat = require('./getLivroCategoria');
const getOrder = require('./getLivroOrdenado');

//------------------------------------------------------------//

const menuOpcoes = read.question(`
Welcome to Maple Library!
U W U

Digite o numeo da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias; [0 w 0]
2 - ORDENAR: Buscar livros de forma ordenada; [- w -]
3 - SAIR [T w T]

`)



switch (menuOpcoes) {
    case '1':
        console.log("Buscar livros por categorias  [U ω U]");
        getCat();
        break;
    case '2':
        console.log("Buscar livros de forma ordenada  [U ω U]");
        getOrder();
        break;
    case '3':
        console.log("SAIR  [O ω O]");
        break;

    default:
        console.log("Selecione uma opcao valida! [> ω <]");
        break;
}
