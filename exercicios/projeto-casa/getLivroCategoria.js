const read = require('readline-sync');
const livros = require('./database');
//mapear -> filtrar

const getCategoria = ( ) => {
    const opcaoInicial = read.question(`Deseja procurar por Categorias? S/N: `).toUpperCase();
    if (opcaoInicial === 'S'){
        const getInfoLivros = livros.map((Livro) => {
            return{
                titulo: Livro.titulo,
                categoria: Livro.categoria
            }
        })
        console.table(getInfoLivros)

        const inputCategoria = read.question(`Digite a categoria conforme tabela acima: `).toLowerCase();
        const confirmarCategoria = read.question(`Confirmar escolha: S/N: `).toUpperCase();
        
        if (confirmarCategoria === 'S'){
            const filtrarCategoriaEscolhida = livros.filter(Livro =>Livro.categoria === inputCategoria);
            console.table(filtrarCategoriaEscolhida)

        }
    }
}

module.exports = getCategoria