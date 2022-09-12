// Armazene separadamente, todos os tipos de dados que aprendeu até hoje.

// const assuntosQueAprendemos = [
//     "Conceitos Iniciais", "Versionamento de Código", "Variáveis",
//     "Operadores", "Condicional", "Loop", "Escopo", "Função",
//     "Objetos", "Arrays", "Métodos"
// ]
// console.log(assuntosQueAprendemos)

function apresentacaoBrizza() {

    let nome = "Brizza";//string

    let idade = 29;//number

    let solteira = true;//boolean

    let formacaoReprograma;//undefined

    let semNome = "null";//nulo

    let signo = {

        nome: "escorpião",

        ascendente: "sagitário"

    }

    console.log(`Os tipos de dados aprendidos por mim até hoje foram: ${typeof (nome)}, ${typeof (idade)}, ${typeof (solteira)}, ${typeof (formacaoReprograma)}, ${semNome} e ${typeof (signo)}. `);

}

apresentacaoBrizza();