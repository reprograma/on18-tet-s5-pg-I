/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

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