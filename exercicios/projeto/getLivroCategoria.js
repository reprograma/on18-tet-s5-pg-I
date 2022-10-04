const read = require('readline-sync');
const livros = require('./database');
	
const getCategoria = () => {
	
	const opcaoInicial = read.question(`Voce deseja procurar por categorias? S/N `).toUpperCase();
	
	if (opcaoInicial === 'S') {

	    const getInfoLivros = livros.map((livro) => {
	        return {
	            titulo: livro.titulo,
	            categoria: livro.categoria
	            }
	        })
            
            console.table(getInfoLivros)
	
	const inputCategoria = read.question(`Digite a categoria conforme a tabela acima: `);
	
	    const confirmarCategoria = read.question(`Tem certeza? S/N `).toUpperCase();
	
	    if (confirmarCategoria === 'S') {
            const filtrarCategoriaEscolhida = livros.filter(livro => livro.categoria === inputCategoria);
	
	            console.table(filtrarCategoriaEscolhida)
            }if (confirmarCategoria === 'N') {
                const getInfoLivros = livros.map((livro) => {
                    return {
                        titulo: livro.titulo,
                        categoria: livro.categoria
                        }
                    })  
    
                console.table(getInfoLivros)
    
            } else {
                console.log ('SAIR')
            } 

            } 
	}
	
module.exports = getCategoria

/* o else roda mesmo quando a condição if (confirmarCategoria === 'N') é atendida, não entendo*/