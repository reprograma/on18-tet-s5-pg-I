// reduce(): recebe uma array e retorna um valor só. Redutor.
// Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio18.js
let auxNum = num.reduce();
console.log(auxNum);
//=======


//GET é obter, utilizamos na programação para dizer que vamos obter um determinado valor.
const getSomaTotal = num.reduce((valorInicial, item) => {
    const somaTotal = valorInicial * item;

    return somaTotal
})

console.log(getSomaTotal)
//>>>>>>> 764dc6af21ddba7be5add8c1d7ab8e45e0fa8913:exercicios/para-sala/revisao/exercicio18.js
