const read = require('readline-sync');
const livros = require('./database');

const getLivroPagina = () =>{ read.question(`Você deseja procurar por quantidade de páginas no livro? S/N `).toUpperCase();

if (opcaoInicial === 'S') {
    const getInfoLivros = livros.map((livro) => {
        return {
            titulo: livro.titulo,
            paginas: livro.paginas
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

module.exports = getLivroPagina