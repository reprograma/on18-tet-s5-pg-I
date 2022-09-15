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

function Repeticao(nome,repetirNome){
    for(i=0;i<=repetirNome-1;i++){
        console.log(nome)
    }
}
Repeticao("Julia",5)