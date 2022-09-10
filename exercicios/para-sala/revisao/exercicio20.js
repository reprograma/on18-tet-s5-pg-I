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

// function repetidor(nome,repetir){
//     const obterNome = nome;
//     const repetirNome = repetir
    
//     for(let i=repetirNome; i<obterNome; i++){
//         console.log(obterNome[i])
//     }

// }

function repetidor(nome,repetir){
 let repetirNome=nome
 let repetidor=repetir

 let soma= repetirNome.repeat(repetidor)
 console.log(soma)
}

repetidor('ellen',5)