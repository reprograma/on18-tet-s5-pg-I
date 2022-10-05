const read = require('readline-sync');
const livros = require('./database');


const getLivroOrdenado = () => {

    const opcaoInicial = read.question(`Voce deseja ver os livros em ordem de numero de paginas? S/N`).toUpperCase();

    if (opcaoInicial === 'S'){
        const livrosOrdenados = livros.sort();

        console.table(livrosOrdenados)     
    }
   
}

module.exports = getLivroOrdenado