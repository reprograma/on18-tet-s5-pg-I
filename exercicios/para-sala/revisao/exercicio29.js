/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

<<<<<<< HEAD
let nota = 89



if (nota > 90){
    console.log (`Conceito: A`)
} else if (nota > 80 && nota <= 90){
    console.log (`Conceito: B`)
} else if (nota > 70 && nota <= 80){
    console.log (`Conceito: C`)
} else if (nota > 65){
    console.log (`Conceito: D`)
} else {
    console.log (`Conceito: F`)
=======
function getNotaIf(pontuacao) {
    if (pontuacao >= 90) {
        return `A`
    } else if (pontuacao >= 80) {
        return `B`
    } else if (pontuacao >= 70) {
        return `C`
    } else if (pontuacao >= 65) {
        return `D`
    } else {
        return `F`
    }
}

const resultadoNota = obterNota(75);

function getNotaSwitch(pontuacao) {
    let retornarNota;
    switch (true) {
        case pontuacao >= 90:
            return retornarNota = "A";
            break;
        case pontuacao >= 80:
            return retornarNota = "B";
            break;
        case pontuacao >= 70:
            return retornarNota = "C";
            break;
        case pontuacao >= 65:
            return retornarNota = "D";
            break;
        default:
            return retornarNota = "F";
    }
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
}