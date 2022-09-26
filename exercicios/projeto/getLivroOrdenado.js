const read = require('readline-sync');
const livros = require('./database');


const getLivroOrdenado = () => {

    const opcaoOrdenado = read.question(`Você deseja procurar o livro de qual modo? 
    1- Páginas;
    2- Recomendação;
     `);

    if (opcaoOrdenado === '1') {
        livros.sort(function (ordenar, ordenarb) {
            if (ordenar.paginas < ordenarb.paginas) {
                return -1;
            } else {
                return true;
            }
        })

        const getInfoLivros = livros.map((livro) => {
            return {
                titulo: livro.titulo,
                paginas: livro.paginas
            }
        })
        console.table(getInfoLivros)

        const confirmarOrdenacao = read.question(`Escolha o livro de acordo com a tabela: `).toUpperCase();

        const confirmarPaginas = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarPaginas === 'S') {
            const filtrarPorOrdemCrescente = livros.filter((livro) => livro.paginas === confirmarOrdenacao) 
            console.table(filtrarPorOrdemCrescente)
        } else {
            console.log("Resposta inválida")
        }

        if (confirmarPaginas === 'N'){
            console.log(getInfoLivros)
        } 

    }

    // A saida está dando uma lista vazia 

        if (opcaoOrdenado === '2') {

        const getInfoLivros = livros.map((livro) => {
            return {
                titulo: livro.titulo,
                recomendacao: livro.recomenda
            }
        })
        console.table(getInfoLivros)

        const inputRecomendacao = read.question(`Você deseja buscar os livros recomendados? S/N `).toUpperCase();


        if (inputRecomendacao === 'S') {
            const filtrarPorRecomendacao = livros.filter(livro => livro.recomenda === true) 
            console.table(filtrarPorRecomendacao)
        } else {
            console.log("Resposta inválida")
        }

        if (inputRecomendacao === 'N'){
            console.log(getInfoLivros)
        }
    }

}


module.exports = getLivroOrdenado