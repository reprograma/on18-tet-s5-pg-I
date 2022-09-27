const read = require('readline-sync');
const livros = require('./database');


const getLivroOrdenado = () => {

    const opcaoInicial = read.question(`Voce deseja ver os livros ordenados de forma crescente por quantidade de paginas? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        livros.sort(function (a, b) {
            if (a.paginas < b.paginas) {
                return -1;
            } else {
                return true;
            }
        });

        console.table(livros);
        const inputTitulo = read.question(`Digite o titulo do livro desejado conforme a tabela acima: `).toUpperCase();

        const confirmarTitulo = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarTitulo === 'S') {
            const filtrarTituloLivro = livros.filter(livro => livro.titulo.toUpperCase() === inputTitulo);

            console.table(filtrarTituloLivro)
        } else {
            console.log('Retornar ao menu inicial')
        }
    }
}

module.exports = getLivroOrdenado;