const livros = require('./database');
const read = require('readline-sync');

//console.table(livros);

function getOrder(){
    const initOption = read.question(`Voce deseja procurar por Ordem? S/N `).toUpperCase();
    //(O ω O)
    if(initOption ==="S"){

        let getLivrosMaped = livros.map(livro => {
            return{
                nome:livro.nome
            }
        });


        let getLivrosOrder = getLivrosMaped.sort((a, b) => {
            if(a.nome < b.nome){
                return -1;
            }
            else if(a.nome > b.nome){
                return 1;
            }
            else{
                return 0;
            }
        });

        console.table(getLivrosOrder);
    }
}

module.exports=getOrder;




