const read = require('readline-sync');
const livros = require('./database');

const getLivrosNaoLidos = () => {

    const opcaoInicial = read.question(`Voce deseja procurar os livros que nao foram lidos? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const filtrarLivrosNaoLidos = livros.filter(livro => livro.leu === false);

        console.table(filtrarLivrosNaoLidos);
    }
    const inputTitulo = read.question(`Digite o titulo do livro desejado conforme a tabela acima: `).toUpperCase();

    const confirmarTitulo = read.question(`Tem certeza? S/N `).toUpperCase();

    if (confirmarTitulo === 'S') {
        const filtrarTituloLivro = livros.filter(livro => livro.titulo.toUpperCase() === inputTitulo);

        console.table(filtrarTituloLivro)

    } else {
        console.log('Retorne ao menu inicial!')
    }
}

module.exports = getLivrosNaoLidos;
//só acertei o Não confirma da linha 11! Não acertei o Não confirma da opção inicial!