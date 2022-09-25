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

function repetirNome(nome, repeticao) {
    for (let i = 0; i < repeticao; i++) {
        console.log(nome);
    }

}

console.log(repetirNome("Jéssica", 4))