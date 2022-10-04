const read = require('readline-sync');
const livros = require('./database');

const getLivroRecomendado = () => {
    
    const opcaoInicial = read.question(`Voce deseja procurar livros pela recomendacao? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const getInfoLivros = livros.map((livro) => {
            return{
                titulo: livro.titulo,
                recomenda: livro.recomenda.valueOf(true) 
            }
    })
        console.table(getInfoLivros)
    }

    const inputRecomendado = read.question(`Digite titulo do livro escolhido conforme a recomendacao desejada: `);

        const confirmarRecomendado = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarRecomendado === 'S') {
            const filtrarLivroEscolhido = livros.filter(livro => livro.titulo === inputRecomendado);
            
            console.table(filtrarLivroEscolhido);
    } if (confirmarRecomendado === 'N'){
        const getInfoLivros = livros.map((livro) => {
            return{
                titulo: livro.titulo,
                categoria: livro.recomenda
            }
        })
        console.table(getInfoLivros)
    } 

}

module.exports = getLivroRecomendado