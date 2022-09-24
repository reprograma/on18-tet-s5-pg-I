const read = require("readline-sync");
const getLivroCategoria = require('./getLivroCategoria');
const getOrdenarLivros = require('./OrdenarLivros');

const menuOpcoes = read.question(`
Bem vinda a livraria virtual da Reprograma! :
Digite o número da opção que você quer:

1- CATEGORIA: busca livros por categoria
2- ORDENAR: ordena livros por páginas
3- SAIR
`);

switch (menuOpcoes){
    case "1":
        getLivroCategoria();
        break
    case "2":
        getOrdenarLivros();
        break
    default:
        console.log("SAIR");
        break;
}