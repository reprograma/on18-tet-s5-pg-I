const read = require('readline-sync');
const livros = require('./database');


const getLivroOrdenado = () => {
    //implementar a lógica COM AS PERGUNTA
}


module.exports = getLivroOrdenado


const read = require('readline-sync');
const livros = require('./database');

const getLivroOrdenado = () => {
    const opcaoInicial = read.question ("Você deseja procurar por livros ?")
    //implementar a lógica COM AS PERGUNTA
    if (opcaoInicial === 'S') {
        livros.sort(function (ordenar, ordenarb) {
            if (ordenar.paginas < ordenarb.paginas) {
                return -1;
            } else {
                return true;
            }
        });
        console.log(livros);

        const inputTitulo = read.question(`Digite qual o livro desejado conforme a tabela acima: `).toUpperCase();

        const confirmarTitulo = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarTitulo === 'S') {
            const filtrarTituloLivro = livros.filter(livro => livro.titulo.toUpperCase() === inputTitulo);

            console.table(filtrarTituloLivro)
        } else {
            console.log('Retorne ao menu inicial!')
        }
    }
}


module.exports = getLivroOrdenado

const opcaoInicial = read.question(`Voce deseja procurar o livro por qual modalidade?
1 - RECOMENDACAO;
2 - PAGINAS;
`)

if (opcaoInicial === '1'){
    const getInfoLivros = livros.map((livro) => {
        return {
            titulo: livro.titulo,
            leu: livro.leu.valueOf(true)
        }
    })
    console.table(getInfoLivros)

    const inputRecomenda = read.question(`Digite o titulo conforme a tabela acima: `);

    const confirmarRecomenda = read.question(`Tem certeza? S/N `);

    if (confirmarRecomenda === 'S') {
        const filtrarRecomendacaoEscolhida = livros.filter(livro => livro.titulo === inputRecomenda);

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


    const inputPagina = read.question(`Digite o numero de paginas de acordo com os disponiveis na tabela acima: `);

    const confirmarPaginas = read.question(`Tem certeza? S/N `);

    if (confirmarPaginas === 'S') {
        const filtrarPaginasEscolhidas = livros.filter(livro => livro.paginas === inputPagina);

        console.table(filtrarPaginasEscolhidas)
  }
