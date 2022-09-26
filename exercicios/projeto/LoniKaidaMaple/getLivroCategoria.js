const livros = require('./database');
const read = require('readline-sync');

//console.table(livros);

function getCategory(){
    const initOption = read.question(`Voce deseja procurar por categorias? S/N`).toUpperCase();
    if(initOption ==="S"){
        let getLivrosMaped = livros.map(livro => {
            return{
                nome:livro.nome,
                categoria:livro.categoria
            }
        });
        console.table(getLivrosMaped);

        const inputCat = read.question(`Digite a categoria conforme a tabela acima: `);
        const confirmInput = read.question(`Tem certeza do que escolheu? S/N`).toUpperCase();

        if(confirmInput==="S"){
            //let catEscolhida="Mecha";


            const catFilter = getLivrosMaped.filter(getLivrosMaped => getLivrosMaped.categoria === inputCat);

            console.table(catFilter);
        }
    }

}


module.exports=getCategory;




