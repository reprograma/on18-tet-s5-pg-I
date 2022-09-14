/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

const retornarNota = (nota) => {
  if (nota > 90) {
    return "A";
  } else if (nota > 80) {
    return "B";
  } else if (nota > 70) {
    return "C";
  } else if (nota > 65) {
    return "D";
  } else {
    return "F";
  }
};

console.log(
  retornarNota(0),
  retornarNota(100),
  retornarNota(66),
  retornarNota(91)
);
