// reduce(): recebe uma array e retorna um valor só. Redutor.
// Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor

// Primeira resolução:

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let valorAposReduce = num.reduce(function (acumulador, valorAtual){
//     return acumulador + valorAtual;
// })

// console.log(valorAposReduce)

// Segunda resolução:

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retornarSoma(lista) {
    console.log(lista.reduce((acumulador, valorAtual) => acumulador + valorAtual))
}
retornarSoma(num);