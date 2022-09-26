const read = require("readline-sync");
const getLivroCategoria = require("./getLivroCategoria");
const getLivroOrdenado = require("./getLivroOrdenado");
const getLivroRecomendado = require("./getLivroRecomendado");
const getLivroLido = require("./getLivroLido");

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma ordenada;
3 - RECOMENDADOS: Buscar livros recomendados;
4 - BOOKLOG: Buscar livros que você já leu;
5 - SAIR 
`);

switch (menuOpcoes) {
  case "1":
    getLivroCategoria();
    break;
  case "2":
    getLivroOrdenado();
    break;
  case "3":
    getLivroRecomendado();
    break;
  case "4":
    getLivroLido();
    break;
  default:
    console.log("SAIR");
    break;
}
