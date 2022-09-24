const read = require('readline-sync');
const livros = require('./database');

const getRecomendados = () =>{
    const opcaoInicial = read.question(`Você deseja ordenar os livros por página? S/N`).toUpperCase();
    
    if (opcaoInicial ==="S"){
        const sorted = livros.sort((a,b)=>{
            return a.paginas - b.paginas;
        });
        console.table(sorted);
    }
}

module.exports = getRecomendados;