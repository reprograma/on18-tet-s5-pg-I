const read = require('readline-sync');
const livros = require('./database');

const getLivroRecomendado = () => {
    const opcaoInicial = read.question(`Deseja exibir livros recomendados? S/N: `).toUpperCase();
    if (opcaoInicial === 'S'){
        const getInfoLivros = livros.map((Livro) => {
            return{
                titulo: Livro.titulo,
                categoria: Livro.categoria,
                recomendado: Livro.recomenda
            }
        })
        const livrosRec = getInfoLivros.filter((Livro) => Livro.recomendado == true)
        console.table(livrosRec)
    }
}

module.exports = getLivroRecomendado