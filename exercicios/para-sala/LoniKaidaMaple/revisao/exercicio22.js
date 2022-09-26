/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

let numb = 50;

for(let y=0; y<=numb; y++){
    if(y % 2 === 0){
        console.log(y, "[Par⭕]");
        console.log("%c[----------------------]", 'color: #f89ee6');
    }
    else{
        console.log(y, "[Ímpar❗]");
        console.log("%c[----------------------]", 'color: #f89ee6');
    }
}