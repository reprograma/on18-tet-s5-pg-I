// Dado uma lista:

const alunas = ["Grazielle", "Gabriela", "Alane", "Pricila", "Luciana", "Letícia"]

/*Adicione mais um item na primeira posição do array.
Item: "Ana"
Em seguida, mostre no console.log()*/
const professoras = ["Melissa", "Jéssica", "Bruna", "Emanuelle"]
function adicionarNomeDeProfessoraNoInicio(lista, nome) {
    lista.unshift(nome);
    console.log(lista);
}

adicionarNomeDeProfessoraNoInicio(professoras, "Ana");
adicionarNomeDeProfessoraNoInicio(alunas, "Deus");
