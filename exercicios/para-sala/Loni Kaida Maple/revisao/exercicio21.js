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

for(x of usuarios){
    console.log("%c[----------------------------------------]", 'color: #f89ee6');
    console.log("[Nome:] "+x.nome, "  [Idade:] "+x.idade);
    console.log("%c[.---------------------------------------]", 'color: #f89ee6');
}