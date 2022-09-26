//Vamos usar a dependência que foi instalado no node.js, e para isso iremos armazenar em uma variavel
const read = require('readline-sync');
const getLivroCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');
const getLivrosAno = require('./getLivrosAno')

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma ordenada; 
3 - ANO: Buscar livros de forma ordenada por ano lançado;
4 - SAIR 
`);


switch (menuOpcoes) {
    case '1':
        getLivroCategoria()
        break;
    case '2':
        getLivroOrdenado()
        break;
    case '3':
        getLivrosAno()
        
    default:
        console.log("SAIR")
        break;
}