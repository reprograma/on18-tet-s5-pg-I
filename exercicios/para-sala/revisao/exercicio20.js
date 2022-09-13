/*REPETIR PARALAVRA
Dado duas variáveis:
obterNome > vai armazenar um nome.
repetirNome > vai armazenar números
Faça um programam que repita a palavra
De acordo com a quantidade de vezes que você
inserir para que essa palavra repita.
exemplo:
const obterNome = "Jéssica";
const repetirNome = 4
A saída terá que ser:
"Alessandra"
"Alessandra"
"Alessandra"
"Alessandra"*/

//const obterNome = 'Alane'
//const repetirNome = 7

// obterNome.repeat(repetirNome);
//let nomeReptido = (obterNome.repeat(repetirNome));
//console.log(nomeReptido)


function repetir(nome, quantidade){
    console.log(nome.repeat(quantidade))
}
repetir("Alessandra\n", 4)