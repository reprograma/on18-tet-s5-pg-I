const read = require('readline-sync');
const livros = require('./database');

const getLivroRecomendado = () => {
    const confirmarOpcao = read.question(`Tem certeza? S/N `).toUpperCase()

    if (confirmarOpcao === 'S') {
        const filtrarListaRecomendados = livros
            .filter(livro => livro.recomenda == true && livro.leu == true)
        
        console.table(filtrarListaRecomendados)


}}

module.exports = getLivroRecomendado 
