const read = require('readline-sync');
const livros = require('./database');


const getLivroOrdenado = () => {
    const opcaoInicial = read.question(`Voce deseja procurar por ordem alfabetica? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const getInfoLivros = livros.sort((a, b) => {
            return a.paginas - b.paginas
        })
        console.table(getInfoLivros)
    }
}

module.exports = getLivroOrdenado
