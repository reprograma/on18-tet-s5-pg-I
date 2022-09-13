// Armazene separadamente, todos os tipos de dados que aprendeu até hoje.

let nome = 'Alane' // string
let idade = 25; // numero 
let feminino = true // boolean 
let sala; // undefined
let aula = null; 

let alunas = {
    aluna1: 'Brizza',
    aluna2: 'Grazielle',
    aluna3: 'Gabriela'
}
console.log(nome, typeof(nome), idade, typeof(idade),feminino,  typeof(feminino), sala, typeof(sala), aula, alunas, typeof(alunas));


function apresentacaoGrazielle() {
    let nome = "Grazielle";//string
    let idade = 29;//number
    let casada = true;//boolean
    let formacaoReprograma;//undefined
    let semNome = "null";//nulo
    let signo = {
        nome: "virgem",
        ascendente: "sagitário"
    }
    console.log(`Os tipos de dados aprendidos por mim até hoje foram: ${typeof (nome)}, ${typeof (idade)}, ${typeof (casada)}, ${typeof (formacaoReprograma)}, ${semNome} e ${typeof (signo)}. `);
}

apresentacaoGrazielle();



