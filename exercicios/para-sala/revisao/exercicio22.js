/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

for(let i = 0; i < 51; i++){ 
    console.log(`número é ${i}`)
    if(i%2 == 0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
}
