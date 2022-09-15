// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];
const x = frutas.map(y => y.charAt(0).toUpperCase() + y.slice(1).toLowerCase());
console.log("%c Fruteira: "+x, 'color: #f89ee6');