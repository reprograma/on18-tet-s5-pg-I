//Livraria virtual da reprograma
// -> Buscar os Livros
//      -por categoria
//      -por numero de paginas
//      -livros ordenados (alfabetico?)
//      -livros recomendados
const read = require('readline-sync');
const getLivroCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');
const getLivroRecomendado = require('./getLivroRecomendado');

const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o número correspondente a opção desejada:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros de forma ordenada;
3 - Livros Recomendados;
4 - SAIR

`)
switch (menuOpcoes){
    case '1':
        getLivroCategoria();
        break;
    case '2':
        getLivroOrdenado();
        break;
    case '3':
        getLivroRecomendado();
    default:
        console.log("SAIR")
}