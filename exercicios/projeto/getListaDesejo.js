const read = require('readline-sync');
const livros = require('./database');

const getListaDesejo = () => {
    const confirmarOpcao = read.question(`Tem certeza? S/N `).toUpperCase()
    if (confirmarOpcao === 'S') {
        const filtrarListaDesejo = livros
            .filter(livro => livro.leu == false)
        
        console.table(filtrarListaDesejo)
    }
}

module.exports = getListaDesejo  
