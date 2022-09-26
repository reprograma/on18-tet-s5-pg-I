const read = require('readline-sync');
const livros = require('./database');

const getLivroOrdenado = () => {
    const opcaoInicial = read.question ("Você deseja procurar por livros ?")
    //implementar a lógica COM AS PERGUNTA
    if (opcaoInicial === 'S') {
        livros.sort(function (ordenar, ordenarb) {
            if (ordenar.paginas < ordenarb.paginas) {
                return -1;
            } else {
                return true;
            }
        });
        console.log(livros);

        const inputTitulo = read.question(`Digite qual o livro desejado conforme a tabela acima: `).toUpperCase();

        const confirmarTitulo = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarTitulo === 'S') {
            const filtrarTituloLivro = livros.filter(livro => livro.titulo.toUpperCase() === inputTitulo);

            console.table(filtrarTituloLivro)
        } else {
            console.log('Retorne ao menu inicial!')
        }
    }
}


module.exports = getLivroOrdenado