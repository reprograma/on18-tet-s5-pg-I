const read = require('readline-sync');
const getLivroCategoria = require('./getLivroCategoria');
const getLivroOrdenado = require('./getLivroOrdenado');
const getLivroRecomendado = require('./getLivroRecomendado');
const getLivroNaoLido = require('./getLivroNaoLido')

const menuOpcoes = read.question(`
Seja bem-vindo a Livraria Reprograma! Fique a vontade para navegar e escolher o seu livro <3

Digite a opcao desejada:

1 - CATEGORIA: Buscar livros por categorias;
2 - ORDENAR: Buscar livros ordenados de forma crescente por quantidade de paginas; 
3 - ORDENAR: Buscar livros recomendados por nossos leitores;
4 - ORDENAR: Buscar livros que ainda nao foram lidos, mas esperam por voce
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
        getLivroRecomendado()
        break;
    case '4':
        getLivroNaoLido()
        break;
    default:
        console.log("SAIR")
        console.log("Agradecemos a sua visita, estaremos ansiosas pelo seu retorno!")
        break;
}