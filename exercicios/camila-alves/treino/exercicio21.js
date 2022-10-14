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

// Antes da resolução(me pareceu ok):

let imprima = console.log(...usuarios)


// DEPOIS DA RESOLUÇÃO USANDO MAP E FUNÇÃO:

let mostreOsNomesEIdades = usuarios.map((usuarios) => console.log(usuarios.nome + " " + usuarios.idade))

// Função:

function motrarNomes(lista) {

    let mostreOsNomesEIdades = lista.map((usuarios) => usuarios.nome + " " + usuarios.idade)
    return mostreOsNomesEIdades
}

console.table(motrarNomes(usuarios))