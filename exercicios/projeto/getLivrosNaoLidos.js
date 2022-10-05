const read = require('readline-sync');
const livros = require('./database');

const getLivrosNaoLidos = () => {
    const opcaoInicial = read.question(`Voce deseja ver apenas livros que nao foram lidos?S/N`).toUpperCase();

    if (opcaoInicial === 'S'){
        const livrosNaoLidos = livros.filter((livro) => livro.leu === false)
        console.table(livrosNaoLidos)
    }
}
module.exports = getLivrosNaoLidos