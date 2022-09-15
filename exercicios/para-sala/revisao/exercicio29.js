/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

function retornarNota(numero){
    if(numero > 90){
        console.log(numero, "A")
    }else if(numero >= 80 && numero < 90){
        console.log(numero, "B")
    }else if(numero >= 70 && numero < 80){
        console.log(numero, "C")
    }else if(numero > 65 && numero < 70){
        console.log(numero, "D OU F")
    }
}

retornarNota(69)

// metodo utilizado = if else
// ok!