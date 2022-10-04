const read = require('readline-sync');
const livros = require('./database');
	
const getLivroOrdenado = () => {
	
	const opcaoInicial = read.question(`Voce deseja procurar livros pela quantidade de paginas? S/N `).toUpperCase();
	
	if (opcaoInicial === 'S') {

	    const getInfoLivros = livros.sort(function (x, y) { 
            return x.paginas - y.paginas
	})
        
		console.table(getInfoLivros);
		
		const inputPaginas = read.question(`Digite a quantidade de paginas conforme a tabela acima: `);
	
	    const confirmarPaginas = read.question(`Tem certeza? S/N `).toUpperCase();
	
	    if (confirmarPaginas === 'S') {
            const filtrarPaginasEscolhidas = livros.filter(livro => livro.paginas == inputPaginas);
	
	            console.table(filtrarPaginasEscolhidas)
			} if (confirmarPaginas === 'N') {
				console.table(getInfoLivros)
			} else {
				console.log('SAIR')
			}
	}
}
	
module.exports = getLivroOrdenado