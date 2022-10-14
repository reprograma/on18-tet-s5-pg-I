/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */


// Está OK
function retornarNota(nota) {
    if(nota >= 90 ) {
        console.log("A")
    } else if(nota >= 80 && nota < 90) {
        console.log("B")
    } else if( nota >= 70 && nota < 80) {
        console.log.log("C")
    } else if(nota >= 65 && nota < 70) {
        console.log("D")
    } else {
        console.log("F")
    }
}

retornarNota(52)