const read = require('readline-sync');
const livros = require('./database');

const getCategoria = () =>{
    const opcaoInicial = read.question(`Você deseja abrir a pasta de livros? S/N `).toUpperCase();
    if (opcaoInicial ==="S"){
        const getInfoLivros = livros.map((livro)=>{
            return{
                titulo: livro.titulo,
                categoria: livro.categoria
            }
        })
        console.table(getInfoLivros)

        const inputCategoria = read.question(`Digite a categoria conforme a tabela acima: `);
        const confirmarCategoria = read.question(`Tem certeza? S/N`).toUpperCase();
        if (confirmarCategoria ==="S"){
            const filtrarCategoria = livros.filter(livro=>livro.categoria === inputCategoria)
            console.table(filtrarCategoria)
        }
    }
}

module.exports = getCategoria;