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

// Sem a resolução:

let obterNome = "Camila"
const repetirNome = 4

function imprimir(dado) {

    if(typeof(dado) == "string") {

      let reatribua =  dado = 1
      let mostre = reatribua * repetirNome
      console.log(mostre)

    } else {
        console.log(mostre)
    }

    
}

imprimir(obterNome)


/* Nota para lembrar depois:  aqui eu fiz uma reatribuição do nome e transformei em um numero, porém, ainda não é esse o objetivo... Não consegui usar o parseInt() para validar a string como um número */

// Com a Resolução:


function repetirNomes(nome, repeticao) {

  for(let i = 0; i < repeticao; i++) {
    console.log(nome)
  }

}

console.log(repetirNomes(obterNome, repetirNome))

