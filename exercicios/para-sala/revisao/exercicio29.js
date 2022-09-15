/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

function retornarNota(nota){
    if(nota > 90.0){
        console.log("Sua nota é A");
    }
    else if(nota > 80.0 && nota < 90.0){
        console.log("Sua nota é B");
    }
    else if(nota > 70.0 && nota < 80.0){
        console.log("Sua nota é C")
    }
    else if(nota > 65.0 && nota < 70.0){
        console.log("Sua nota é D")
    }
    else {
        console.log("Sua nota é F")
    }
}

retornarNota(82.0)