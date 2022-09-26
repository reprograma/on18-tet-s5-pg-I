const read = require('readline-sync');
const livros = require('./database');

const getLivroNaoLido = () => {
    const opcaoInicial = read.question(`Voce deseja procurar por livros que nao foram lidos? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const listarLivrosNaoLidos = livros.filter((livro) => livro.leu === false);
        console.table(listarLivrosNaoLidos)
    }
}

module.exports = getLivroNaoLido