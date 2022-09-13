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
// console.log(usuarios)

function imprimirNome(mostrar){
    for(let i=0; i<usuarios.length; i++){
        let nome=usuarios[i].nome
        let idade=usuarios[i].idade
        console.log(nome )
        console.log(idade)
}
}
imprimirNome(usuarios)

function imprimirUsuarios(lista){
    console.log(lista.nome)
    console.log(lista.idade);
}
usuarios.forEach(imprimirUsuarios)