const read = require('readline-sync');
const livros = require('./database');

function compare(a,b) {
    if (a.paginas < b.paginas)
       return -1;
    if (a.paginas > b.paginas)
      return 1;
    return 0;
}

const getLivroOrdenado = () => {
      const opcaoInicial = read.question(`Você Deseja Fazer a buscar por livros de forma ordenada? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        livros.sort(compare)
        console.table(livros)

        const inputCategoriaPorOrdem = read.question(`Digite o número de páginas conforme a tabela acima: `);

        const confirmarCategoriaPorOrdem = read.question(`Tem certeza? S/N `);

        if (confirmarCategoriaPorOrdem.toUpperCase() === 'S') {
            const filtrarCategoriaEscolhida = livros.filter(livro => livro.paginas == inputCategoriaPorOrdem);

            console.log(filtrarCategoriaEscolhida)
        }
    }
}
    // implementar a lógica COM AS PERGUNTA



module.exports = getLivroOrdenado
 
    


// getLivroOrdenado()