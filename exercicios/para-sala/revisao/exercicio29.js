/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

function retornaNota(valor){

    console.log(valor)
    
    if(valor>90){
    return console.log("A")
    }
    else if(valor>80 && valor <= 90 ){
        return console.log("B")
    }
    else if(valor>70 && valor <=80){
        return console.log("C")
    }
    else if(valor > 65 && valor<=70){
        return console.log("D")
    }
    else{
        return console.log('Valor ínválido')
    }
}

retornaNota(71)