//aplicação 

const read = require("readline-sync");

cont menuOpcoes = read.question('
Bem vinda a Livraria Virtual da Reprograma! :)

Digite o numero da opção que você quer:

1- CATEGORIA: Buscar livros por categorias;
2- ORDENAR: Buscar livros de forma ordenada;
3- Sair
)



switch(menuOpcoes) {
    case "1":
        console.log("Busca por categoria");
        break;
    case"2":
        console.log("Buscar por livros");
        break;
    default:
        console.log("SAIR")
        break;

}