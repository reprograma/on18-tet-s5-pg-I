const read = require('readline-sync');
const livros = require('./database');


const getLivroOrdenado = () => {
    const opcaoInicial = read.question(`Voce deseja procurar por livros ordenados por paginas? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        livros.sort((a, b) => {
            if (a.paginas > b.paginas) return 1;
            if (a.paginas < b.paginas) return -1;
        })
        console.table(livros)
    }
}


module.exports = getLivroOrdenado