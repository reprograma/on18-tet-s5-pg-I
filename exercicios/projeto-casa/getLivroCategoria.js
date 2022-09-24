const read = require('readline-sync');
const livros = require('./database');

const getCategoria = () => {
    const opcaoInicial = read.question( `Você deseja procurar por categoria? S/N`).toUpperCase(); 
    if (opcaoInicial === 'S'){
        const getInfoLivros=livros.map((livro)=>{
            return{
                titulo: livro.titulo,
                categoria: livro.categoria
            }        
        })
        
        console.table(getInfoLivros)
        const inputCategoria = read.question(`Digite a categoria conforme a tabela acima: `);
        const confirmarCategoria = read.question(`Tem certeza? S/N`);
        if (confirmarCategoria === 'S'){
            const filtrarCategoria = livros.filter(livro => livro.categoria === inputCategoria);
            console.table(filtrarCategoria)
        }
    }
}


module.exports = getCategoria;





