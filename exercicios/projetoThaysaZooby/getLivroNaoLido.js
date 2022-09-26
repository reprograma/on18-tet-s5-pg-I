const read = require('readline-sync');
const livros = require('./database');


const getLivroNaoLido = () => {

    const opcaoInicial = read.question(`Você deseja procurar por livros nao lidos? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        let livrosNaoLidos = livros.filter((livros)=>{livros.leu == 'false'})
        console.table(livrosNaoLidos)
    }
}

module.exports = getLivroNaoLido
