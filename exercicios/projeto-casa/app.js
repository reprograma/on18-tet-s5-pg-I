const read = require ('readline-sync');
const getLivroCategoria = require ('./getLivroCategoria');
const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! ;)

Digite o número da opção que você quer:

1)CATEGORIA: Buscar livros por categoria;
2)ORDENAR: Buscar livro de forma ordenada;
3)SAIR



`);

switch(menuOpcoes){
    case '1' :
       getLivroCategoria()
      //  console.log('Busca por categoria')
        break;        
    case '2' :
        console.log('Busca por livros')
        break;
    default:
        console.log('Sair')
        break;
}