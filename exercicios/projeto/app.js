const read = require("readline-sync");
const getLivroCategoria = require("./getLivroCategoria");
const getLivroOrdenado = require("./getLivroOrdenado");
const getLivroRecomendado = require("./getLivroRecomendado");
const getLivroLido = require("./getLivroLido");
const adicionarLivro = require("./adicionarLivro");

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opcao que voce quer:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma ordenada;
3 - RECOMENDADOS: Buscar livros recomendados;
4 - BOOKLOG: Buscar livros que você já leu;
5 - NÃO LIDOS: Buscar livros que você ainda não leu;
6 - ADICIONAR UM LIVRO: Adiciona um livro de forma interativa;
7 - SAIR 
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
  case "5":
    getLivroLido(false);
    break;
  case "6":
    adicionarLivro();
    break;
  default:
    console.log("SAIR");
    break;
}
