const read = require('readline-sync');
const livros = require('./database');
const getLivroRecomendado = require('./getLivroRecomendado');

const getLivroNaoLido = () => {
    const opcaoInicial = read.question(`Deseja buscar livros que ainda nao foram lidos? S/N `).toUpperCase();

    if (opcaoInicial === 'N') {

        console.log('Retornar ao menu inicial')

    } else if (opcaoInicial === 'S'){

        console.log('Livros recomendados pelos leitores:')
        console.table(livros)
    }
}
module.exports = getLivroNaoLido