const read = require('readline-sync');
const livros = require('./database');


const listarLivrosNaoLidos = () => {
    const opcaoInicial = read.question(`Você deseja buscar os livros ainda não lidos? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const getInfoLivros = livros.filter(l => !l.leu)
        console.table(getInfoLivros);

        let outraOpcao = read.question(`Tem algum desses que está no topo da sua lista? S/N `).toUpperCase();

        if (outraOpcao === 'S') {
            outraOpcao = read.question(`Qual destes? Digite o indice`).toUpperCase();
            if( outraOpcao < 0 || outraOpcao >= getInfoLivros.length){
                console.log("opção inválida");
            } else {
                console.table(getInfoLivros[outraOpcao]);
            }
        }
    }
}


module.exports = listarLivrosNaoLidos