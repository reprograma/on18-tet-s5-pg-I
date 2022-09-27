const read = require('readline-sync');
const livros = require('./database');


const getLivroOrdenado = () => {

const opcaoInicial = read.question(`Voce deseja procurar os livros de que forma?
1 - RECOMENDADOS;
2 - PAGINAS;
`)

if (opcaoInicial === '1'){
    const getInfoLivros = livros.map((livro) => {
        return {
            titulo: livro.titulo,
            recomenda: livro.recomenda.valueOf(true)
        }
    })
    console.table(getInfoLivros)

    const inputRecomendados = read.question(`Digite o titulo que voce deseja: `);

    const confirmarRecomendacao = read.question(`Tem certeza? S/N `);

    if (confirmarRecomendacao === 'S') {
        const filtrarRecomendacaoEscolhida = livros.filter(livro => livro.titulo === inputRecomendados);

        console.table(filtrarRecomendacaoEscolhida)
  }
 }
 if (opcaoInicial === '2'){
    const getInfoPaginas = livros.map((livro) => {
        return {
            titulo: livro.titulo,
            pagina: livro.paginas
        }
    })
    console.table(getInfoPaginas)


    const inputPagina = read.question(`Digite o numero de paginas para escolher o seu livro: `);

    const confirmarPaginas = read.question(`Tem certeza? S/N `);

    if (confirmarPaginas === 'S') {
        const filtrarPaginasEscolhidas = livros.filter(livro => livro.paginas === inputPagina);

        console.table(filtrarPaginasEscolhidas)
  }
 }
}


module.exports = getLivroOrdenado