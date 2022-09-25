const read = require ('readline-sync');
const getLivroCategoria = require ('./getLivroCategoria');
const getListarRecomendados = require ('./getListarLivrosRecomendados')
const getMostrarOrdenados = require ('./getLivrosOrdenados')
const menuOpcoes = read.question(`
Bem vinda a Livraria Virtual da Reprograma! ;)

Digite o numero da opcao que voce quer:

1)CATEGORIA: Buscar livros por categoria;
2)ORDENAR: Buscar livro de forma ordenada;
3)LISTAR : Buscar livros recomendados;
3)SAIR



`);

switch(menuOpcoes){
    case '1' :
       getLivroCategoria()
      //  console.log('Busca por categoria')
        break; 
    case '2' :
        getMostrarOrdenados()
        break;           
    case '3' :
      getListarRecomendados()
       // console.log('Busca por livros')
        break;
    default:
        console.log('Sair')
        break;
}