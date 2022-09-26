const read = require('readline-sync');
const livros = require('./database');

const getLivroOrdenado = () => {
    const opcaoInicial = read.question(`Deseja exibir livros em ordem alfabética? S/N: `).toUpperCase();
    if (opcaoInicial === 'S'){
        const getInfoLivros = livros.map((Livro) => {
            return{
                titulo: Livro.titulo,
                categoria: Livro.categoria
            }
        })
        const livrosAlf = getInfoLivros.sort((a, b) => a.titulo.localeCompare(b.titulo))
        console.table(livrosAlf)
    }
}

module.exports = getLivroOrdenado