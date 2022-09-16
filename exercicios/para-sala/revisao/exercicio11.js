// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêSSEgO", "jAcA"];

let listaDeFrutas = frutas.map((item)=>item[0].toUpperCase()+item.slice(1).toLowerCase())
console.log(listaDeFrutas)

// ver vídeo como foi feito

// pesquisar o slice direitinho
// formas que as colegas fizeram, abaixo:

//let resultado = frutas.filter(element => element.charAt(0) == element.charAt(0).toUpperCase())
//function primeiraLetraMaiuscula(lista){

    for (let i=0; i< lista.length; i++){
        lista[i]= lista[i].toLowerCase()
    }
    
    for (let i = 0; i < lista.length; i++){
        lista[i] = lista[i][0].toUpperCase() + lista[i].substring(1)
    }
    
     return console.log(lista)
    
    
    
  //  primeiraLetraMaiuscula(frutas)
    
    //let frutasEditadas = [] 
//frutas.forEach((fruta)=>{
  //  frutasEditadas.push(fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
//})
//console.log(frutasEditadas)
