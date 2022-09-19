/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

<<<<<<< HEAD
function retornarNota(pontuacao) {
    if (pontuacao >= 90) {
        console.log("Nota A")
    } else if (pontuacao >= 80 && pontuacao < 90) {
        console.log("Nota B")
    } else if (pontuacao >= 70 && pontuacao < 80) {
        console.log("Nota C")
    } else if (pontuacao >= 65 && pontuacao < 70) {
        console.log("Nota D")
    } else {
        console.log("F")
    }
}
retornarNota(64)
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
}
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
