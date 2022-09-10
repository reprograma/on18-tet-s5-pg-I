// Armazene separadamente, todos os tipos de dados que aprendeu até hoje.

let numero = 1;
let string = "exemplo";
let boolean = false;
let lista = [numero, string];
let objeto = { lista, numero, string };
let set = new Set(lista);

let funçao = () => console.log("Retorno");

class Classe {
  retorno() {
    console.log("Retorno classe");
  }
}
