/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */
function retornarNota(pontuacao) {
    if (pontuacao >= 90) {
        console.log("Nota A");
    } else if (pontuacao >= 80 && pontuacao < 90) {
        console.log("Nota B");
    } else if (pontuacao >= 70 && pontuacao < 80) {
        console.log("Nota C");
    } else if (pontuacao >= 65 && pontuacao < 70) {
        console.log("Nota D");
    } else {
        console.log("Nota F");
    }
}
retornarNota(86);