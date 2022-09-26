// 2) Retornar frutas com somente a primeira letra maiúscula
let frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

frutas = frutas.map(
  (fruta) => fruta[0].toUpperCase() + fruta.slice(1).toLowerCase()
);

console.log(frutas);
