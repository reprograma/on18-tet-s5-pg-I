// reduce(): recebe uma array e retorna um valor só. Redutor.
// Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor

//const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



//GET é obter, utilizamos na programação para dizer que vamos obter um determinado valor.
//const getSomaTotal = num.reduce((valorInicial, item) => {
    //const somaTotal = valorInicial * item;

    //return somaTotal
//})

//console.log(getSomaTotal)


const num = [5,6, 9, 9];

const getSomaDeTodos = num.reduce((valorInicial, item) =>{
    const resultadoFinal = valorInicial * item;

    return resultadoFinal
})
console.log(getSomaDeTodos)