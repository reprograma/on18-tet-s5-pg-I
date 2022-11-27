// reduce(): recebe uma array e retorna um valor só. Redutor.
// Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
<<<<<<< HEAD
// const soma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(result, item){
//     return result + item;
    
// })
// console.log(soma)
 
function reduzirNumeros(todos){
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(result, item){
    return result + item;
    
})
console.log(soma)
}
reduzirNumeros()
=======



//GET é obter, utilizamos na programação para dizer que vamos obter um determinado valor.
const getSomaTotal = num.reduce((valorInicial, item) => {
    const somaTotal = valorInicial * item;

    return somaTotal
})

console.log(getSomaTotal)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
