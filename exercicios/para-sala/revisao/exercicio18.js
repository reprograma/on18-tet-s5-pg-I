// reduce(): recebe uma array e retorna um valor só. Redutor.
// Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = num.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
});
console.log("O Valor total é: " + total);