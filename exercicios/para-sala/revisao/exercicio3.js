// Armazene separadamente, todos os tipos de dados que aprendeu até hoje.

<<<<<<< HEAD
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
=======
let tipoNumeroInteiro = 12;
let tipoNumeroFlutuante = 12.5;
let tipoString = "Textos com caractéres especiais";
let tipoBooleano = true;
let tipoObjeto = {
    nome: "Jéssica",
    idade: 15,
    estiloMusical: ["forró", "rock", "samba rock"]
}
let tipoArrays = ["String", 12,
    {
        nome: "Objeto propriedade"
    }
];

let outrosTipos = [undefined, null, NaN];


console.log(typeof(tipoBooleano))
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
