// 2) Retornar frutas com somente a primeira letra maiúscula



const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

  

const listaDeFruta = []
frutas.forEach((fruta) => {
   listaDeFruta.push(fruta[0].toUpperCase() + fruta.slice(1).toLowerCase())
}

)
console.log(listaDeFruta)


//* let palavras = frutas.map((lista) => {
    //     const palavras = frutas.split(" ");
    //     for (let letra = 0; letra < palavras.length; letra++) {
    //      palavras[letra] = palavras[letra][0].toUpperCase() + palavras[letra].substr(1)
    // })

    //* console.log(frutas)

