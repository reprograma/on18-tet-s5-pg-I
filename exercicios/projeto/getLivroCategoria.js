const read = require('readline-sync');
const livros = require('./database');

// 1. mapear os livros;
// 2. filtrar a categoria ESCOLHIDA

const getCategoria = () => {

    const opcaoInicial = read.question(`Voce deseja procurar por categorias? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const getInfoLivros = livros.map((livro) => {
            return {
                titulo: livro.titulo,
                categoria: livro.categoria
            }
        })
        console.table(getInfoLivros)

        const inputCategoria = read.question(`Digite a categoria conforme a tabela acima: `);

        const confirmarCategoria = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarCategoria === 'S') {
            const filtrarCategoriaEscolhida = livros.filter((livro) => livro.categoria.includes(inputCategoria))
            console.log(filtrarCategoriaEscolhida)
                
        }
    
    }
} 

module.exports = getCategoria