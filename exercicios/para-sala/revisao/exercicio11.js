// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];




let Elemento=frutas.map(fruta=> fruta[0].toUpperCase()+fruta.slice(1).toLocaleLowerCase()
   
)

console.log(Elemento)