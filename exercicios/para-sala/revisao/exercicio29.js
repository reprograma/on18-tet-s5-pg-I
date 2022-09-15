/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */
function retornaNota(pontuacao) {
    if( pontuacao <= 65 ) return "F";
    else if( pontuacao <= 70 ) return "D";
    else if( pontuacao <= 80 ) return "C";
    else if( pontuacao <= 90 ) return "B";
    else                       return "A";
}

console.log(retornaNota(50));
console.log(retornaNota(150));
console.log(retornaNota(75));
console.log(retornaNota(85));
console.log(retornaNota(68));