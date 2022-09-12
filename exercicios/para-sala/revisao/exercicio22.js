/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

for (let i = 0; i<=50 ;i++){
    const par = i%2 ===0 ? 'par' : 'impar';
    console.log(i, par);
}
