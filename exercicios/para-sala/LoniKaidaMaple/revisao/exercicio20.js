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

//<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio20.js
let nome, repNum;
nome="Panda🐼";
repNum = 8;

function repeatName(){
    for(let x = 0; x<repNum; x++){
        console.log(nome,x);
    }
}
repeatName();

