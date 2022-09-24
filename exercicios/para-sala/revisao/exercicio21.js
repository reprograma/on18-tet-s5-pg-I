/* Dado um array de objetos: */

const usuarios = [
    { nome: "Jordana", idade: 18 },
    { nome: "Lilian", idade: 28 },
    { nome: "Janaina", idade: 19 }
];

/*Imprima todos nome e idade da variável usuários.
A saída deverá ser:
Jordana
18
Lilian
28
...*/

//uma forma de fazer 
function imprimirUsuario(lista){
    console.log(lista.nome)
    console.log(lista.idade)
    console.log('===========================')
}

usuarios.forEach(imprimirUsuario)


//-------------outra forma

let usuariosLista = usuarios.map(usuarios => usuarios.nome + '  ' + usuarios.idade)
console.table(usuariosLista)

// ---