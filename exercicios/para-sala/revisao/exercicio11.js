//2) Retornar frutas com somente a primeira letra maiúscula

const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

let frutasEditadas = [] 
frutas.forEach((fruta)=>{
    frutasEditadas.push(fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
})
console.log(frutasEditadas)