const read = require('readline-sync');
const livros = require('./database');


const getLivroOrdenado = () => {
    //implementar a lógica COM AS PERGUNTA
    const opcaoInicial = read.question(`Você deseja procurar por ordem de paginacao? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {     

        for (let i = 0; i < livros.length; i++){
            let livrosTratados = livros[i]
            console.log(livrosTratados)
            for (let j = 0; j < livrosTratados.length; j++){
                let livrosOrdenados = livrosTratados.paginas.sort()
                console.log(livrosOrdenados) 
            }   
        }       
    }
}


module.exports = getLivroOrdenado