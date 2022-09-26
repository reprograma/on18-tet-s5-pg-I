const read = require('readline-sync');
const livros = require('./database');

const getLivroRecomendacao = () => {
    //implementar a lógica COM AS PERGUNTA
    const opcaoInicial = read.question(`Você deseja procurar por livros recomendados? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {  

        for (let i = 0; i < livros.length; i++){
            let livrosTratados = livros[i]
            
            if(livrosTratados.recomenda == 'true'){
                console.table(livrosTratados) 
            }            
        } 
    }   
}       
    
module.exports = getLivroRecomendacao