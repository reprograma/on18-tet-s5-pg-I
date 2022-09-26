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

//<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio21.js
for(x of usuarios){
    console.log("%c[----------------------------------------]", 'color: #f89ee6');
    console.log("[Nome:] "+x.nome, "  [Idade:] "+x.idade);
    console.log("%c[.---------------------------------------]", 'color: #f89ee6');
//=======
}

//for
//fornecem acesso ao índice do array, não ao elemento real.
for (let indice = 0; indice < usuarios.length; indice++) {
    console.log(usuarios[indice])
    console.log(indice)
}


console.log('------------')

//Com forEach() você pode acessar o índice do array em indice
//e você tem acesso ao próprio elemento do array
usuarios.forEach((valorAtual, indice) => {
    console.log(valorAtual)
    console.log(indice)
})

console.log('------------')

/*for..of, você tem acesso ao próprio elemento do array mas não é convencional
você tentar acessar o indice do array, você teria que utilizar o método entries()*/
for (usuario of usuarios) {
    console.log(usuario);
//>>>>>>> 764dc6af21ddba7be5add8c1d7ab8e45e0fa8913:exercicios/para-sala/revisao/exercicio21.js
}