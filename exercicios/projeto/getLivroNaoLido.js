const read = require('readline-sync');
const livros = require('./database');

const getLivroNaoLido = () => {
    const opcaoInicial = read.question(`Voce deseja buscar livros que ainda nao foram lidos? S/N `).toUpperCase();

    if (opcaoInicial === 'N') {

        console.log('Que pena, não foi dessa vez! Retornar ao menu inicial')

    } else if (opcaoInicial === 'S'){

        console.log('Aqui estão os livros carentes de um bom amigo leitor:')

        const filtrarLivroNaoLido = livros.filter(livro => livro.lido === false);

        console.table(filtrarLivroNaoLido);

        const inputTitulo = read.question(`Digite o titulo desejado conforme a tabela acima: `).toUpperCase();

        const confirmarTitulo = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarTitulo === 'S') {

            console.log('Show de bola! So falta levar essa belezinha para casa');

             const filtrarTituloLivro = livros.filter(livro => livro.titulo.toUpperCase() === inputTitulo);

            console.table(filtrarTituloLivro)

        } else {
            console.log('Retornar ao menu inicial')
        }
    }
}

module.exports = getLivroNaoLido

