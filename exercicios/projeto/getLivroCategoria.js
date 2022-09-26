const read = require('readline-sync');
const livros = require('./database');

const getCategoria = () => {

    const opcaoInicial = read.question(`Você deseja procurar por categorias? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const getInfoLivros = livros.map((livro) => {
            return {
                titulo: livro.titulo,
                categoria: livro.categoria
            }
        })
        console.table(getInfoLivros)

        const inputCategoria = read.question(`Digite a categoria conforme a tabela acima: `).toUpperCase();

        const confirmarCategoria = read.question(`Tem certeza? S/N `);

        if (confirmarCategoria === 'S') {
            const filtrarCategoriaEscolhida = livros.filter(livro => livro.categoria === inputCategoria);

            console.table(filtrarCategoriaEscolhida)
        }
        if (confirmarCategoria === 'N'){
            console.log("Volte ao menu principal.")
        }
    }
}

module.exports = getCategoria