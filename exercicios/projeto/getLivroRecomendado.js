const read = require('readline-sync');
const livros = require('./database');


const listarRecomendados = () => {
    const opcaoInicial = read.question(`Você deseja listar os livros lidos e recomendados? S/N `).toUpperCase();

    if (opcaoInicial === 'S') {
        const getInfoLivros = livros.filter(l => l.leu && l.recomenda)
        console.table(getInfoLivros);

        let outraOpcao = read.question(`Tem algum desses que você gosta mais? S/N `).toUpperCase();

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


module.exports = listarRecomendados