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
let obterNome = "Alessandra "
let repetirNome = 4
let repetir = obterNome.repeat(repetirNome)
console.log(repetir)

function repetir(nome, quantidade){
    console.log(nome.repeat(quantidade))
}
repetir("Alessandra\n", 4)

let listaUsuarios = usuarios.map(usuarios => usuarios.nome + " " + usuarios.idade)

console.table(listaUsuarios);

