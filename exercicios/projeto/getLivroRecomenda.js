const read = require('readline-sync');
const livros = require('./database');

const getLivroPagina = () =>{ read.question(`Você deseja ver os livros que recomendamos? S/N `).toUpperCase();

if (opcaoInicial === 'S') {
    const getInfoLivros = livros.map((livro) => {
        return {
            titulo: livro.titulo,
            leu: livro.leu
        }
    })
    console.table(getInfoLivros)
   
    const inputPaginas = read.question(`Digite a quantidade máxima de páginas pretendidas conforme a tabela acima: `);

    const confirmarPaginas = read.question(`Tem certeza? S/N `);

    if (confirmarPaginas === 'S') {
        const filtrarQuantidadeEscolhida = livros.filter(livro => livro.paginas === inputPaginas);

        console.table(filtrarQuantidadeiaEscolhida)
    }if(confirmarPaginas === 'N') {
        console.table(getInfoLivros)
    }else{
        console.log('Resposta inválida')
    }
  }
}
 
module.exports = getLivroRecomenda