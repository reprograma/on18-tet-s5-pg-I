/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

<<<<<<< HEAD
function parimpar(inicio, fim){
    for(let numero = inicio; numero <= fim; numero++) {

    
    if (numero % 2 == 0) {
       console.log(numero,"par!")
    } else {
       console.log(numero, "impar!")
    }
    // console.log(parimpar(50))
    }
}
parimpar(0, 50);
=======
let numero = 50;

for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
        console.log(i, "par");
    } else {
        console.log(i, "ímpar");
    }
}


function checkNumeroImparPar(inicio, fim) {
    for (let numero = inicio; numero <= fim; numero++) {
        console.log(numero, numero % 2 == 0 ? 'par' : 'impar');
    }
}

checkNumeroImparPar(0, 50)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
