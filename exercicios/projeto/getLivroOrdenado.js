const read = require('readline-sync');
const livros = require('./database');


const listarLivrosOrdenados = () => {
    const opcaoInicial = read.question(`Você deseja listar os livros ordenados? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const getInfoLivros = livros.sort((livro1, livro2) => {
            if( livro1.paginas > livro2.paginas ) return 1;
            if( livro1.paginas == livro2.paginas ) return 0;
            return -1;
        });
        
        console.table(getInfoLivros);

        let outraOpcao = read.question(`Deseja ver detalhe de mais algum? S/N `).toUpperCase();

        if (outraOpcao === 'S') {
            outraOpcao = read.question(`Qual? Digite o indice`).toUpperCase();
            if( outraOpcao < 0 || outraOpcao >= getInfoLivros.length){
                console.log("opção inválida");
            } else {
                console.table(getInfoLivros[outraOpcao]);
            }
            
        }
    }
}


module.exports = listarLivrosOrdenados