const reads = require('readline-sync');
const livros = require('./database');

const getLivrosAno = () => {
    const opcaoInicial = reads.question ("Você deseja procurar por ano de lançamento ?")
    //implementar a lógica COM AS PERGUNTA
    if (opcaoInicial === 'S') {
        livros.sort(function (ordenar, ordenarb) {
            if (ordenar.ano < ordenarb.ano) {
                return -1;
            } else {
                return true;
            }
        });
        console.log(livros);

        const clicaremAno = reads.question(`Digite qual o livro desejado conforme a tabela acima: `).toUpperCase();

        const confirmaranodoFilme = reads.question(`Tem certeza? S/N `).toUpperCase();
        //Filter não esta funcionando
        if (confirmaranodoFilme === 'S') {
            const filtroporAno = livros.filter(livroEscolhido => livroEscolhido.ano === clicaremAno);
            console.table(filtroporAno)
        } else {
            console.log('Retorne ao menu inicial!')
        }
    }
}


module.exports = getLivrosAno