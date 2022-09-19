const read = require('readline-sync');
const livros = require('./database');

const getLivroRecomendado = () => {

    const opcaoInicial = read.question(`Voce deseja procurar os livros que sao recomendados? S/N `).toUpperCase();
    if (opcaoInicial === 'S') {
        const filtrarLivrosRecomendados = livros.filter(livro => livro.recomenda === true && livro.leu === true);
        console.table(filtrarLivrosRecomendados);
    }

    const inputTitulo = read.question(`Digite o titulo do livro desejado conforme a tabela acima: `).toUpperCase();

    const confirmarTitulo = read.question(`Tem certeza? S/N `).toUpperCase();

    if (confirmarTitulo === 'S') {
        const filtrarTitulolivro = livros.filter(livro => livro.titulo.toUpperCase() === inputTitulo);
        console.table(filtrarTitulolivro);
    } else {
        console.log('Retorne ao menu inicial!')
    }
}


module.exports = getLivroRecomendado;