/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

function RetornarNota(numero){
    if (numero >=90){
        return "A"
    }else if (numero >= 80 && numero <90){
        return "B"
    }else if (numero >= 70 && numero <80){
        return "C"
    }else if (numero >= 60 && numero <70){
        return "D"
    }else{
        return "E"
    }
}
console.log(RetornarNota(100))