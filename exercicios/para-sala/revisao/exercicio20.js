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

// Caractere de quebra de linha!

// Primeira resolução:

const nome = "Brizza\r\n";
console.log(nome.repeat(4));

// Segunda resolução:

function repetir(nome, quantidade){  
   console.log(nome.repeat(quantidade))   
}
repetir("Brizza\n", 4)