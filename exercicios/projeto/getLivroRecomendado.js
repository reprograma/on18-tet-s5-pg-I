const read = require('readline-sync');
const livros = require('./database');

const getLivroRecomendado = () => {
    const opcaoInicial = read.question(`Voce deseja procurar por livros lidos e recomendados? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const filtrarLivrosRecomendados = livros.filter((livro) =>
            livro.recomenda === true && livro.leu === true);
        console.table(filtrarLivrosRecomendados)
    }
}

module.exports = getLivroRecomendado