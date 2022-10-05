const read = require('readline-sync');
const livros = require('./database');

const getLivrosRecomendados = () => {
    const opcaoInicial = read.question(`Voce deseja ver livros recomendados?S/N`).toUpperCase();

    if (opcaoInicial === 'S'){
        const livrosRecomendados = livros.filter((livro) => livro.recomenda === true)
        console.table(livrosRecomendados)
    }

}
module.exports = getLivrosRecomendados

