const read = require('readline-sync');
const livros = require('./database');



const getListarRecomendados = () => {
    const opcaoInicial = read.question( `Voce deseja listar os livros recomendados? S/N`).toUpperCase();  
    
    if (opcaoInicial === 'S'){
        const getInfoLivros=livros.filter((livro)=>{
        if (livro.recomenda){
            return{
                titulo: livro.titulo,
                categoria: livro.categoria
            } 
        }
        
        })     
        console.table(getInfoLivros)
    }





}

module.exports = getListarRecomendados;