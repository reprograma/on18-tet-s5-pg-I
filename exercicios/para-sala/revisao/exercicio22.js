/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/
for (let index = 0; index < 51; index++) {
    console.log(index, index % 2 == 0 ? "Par" : "Ímpar");
}