/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

function getNota(pontos){
    if(pontos >=90)
        return "A";
    else if(pontos >=90)
        return "B";
    else if(pontos >=80)
        return "C";
    else if(pontos >=70)
        return "D";
    else if(pontos >=65)
        return "E";
    else
    return "F";
}

console.log("Ana", getNota(115));
console.log("João", getNota(45));
console.log("Kai'sa", getNota(73));
console.log("Zed", getNota(66));