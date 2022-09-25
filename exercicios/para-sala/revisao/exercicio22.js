/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/
function contador (){
    for (let i = 0; i <= 50; i++){
       
    if (i % 2 ==0){
        console.log(`Este número é par ${i}`)
    } else {
        console.log (`Este número é ímpar ${i}`)
    }
    }
}
contador ()

/* outro modo para imprimir de 0 até 50
let contador = 0;

while (contador <= 50) {
  console.log(contador);

  contador++;
} */
