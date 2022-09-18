const livros = require('./database');
const read = require('readline-sync');

console.table(livros);

function getOrder(){
    const initOption = read.question(`Voce deseja procurar por Ordem? S/N `).toUpperCase();
    //(O ω O)
    if(initOption ==="S"){
        let getLivrosOrder = livros.sort();
        
        console.table(getLivrosOrder);
    }
}

let getLivrosMaped = livros.map(livro => {
    return{
        nome:livro.nome
    }
});


let getLivrosOrder = getLivrosMaped.sort(getLivrosMaped.nome);

console.table(getLivrosOrder);