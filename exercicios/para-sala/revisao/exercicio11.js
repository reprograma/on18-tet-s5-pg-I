// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

/*const minusculas = frutas.toLowerCase()
console.log(minusculas)*/

function primeiraLetraMaiuscula(lista){

for (let i=0; i< lista.length; i++){
    lista[i]= lista[i].toLowerCase()
}

for (let i = 0; i < lista.length; i++){
    lista[i] = lista[i][0].toUpperCase() + lista[i].substring(1)
}

 return console.log(lista)
}


primeiraLetraMaiuscula(frutas)