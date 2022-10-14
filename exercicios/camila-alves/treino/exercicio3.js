// // Armazene separadamente, todos os tipos de dados que aprendeu até hoje.


const texto = "string"
const numerosInteiros = 25
const numerosDecimaisFloat = 25.5
const listas = [1, 2, 3]
const objetos = {
    nome: "Camila",
    idade: 25
}
const boolean = {verdadeiro: true, falso: false}
const funcoes =  function() {
    let funcaoArrow = () => {}
}
const demonstre = listas.map((numero) => {
  let multiplique =  numero * 3
  return multiplique
})
console.log(demonstre, "Métodos de iteração são formas que eu tenho de percorrer uma lista. Todo método de iteração recebe uma função como parâmetro e o nome dessa função é callback")

const espalheUsandoOSpread = console.log(...listas)

const mostreAsChavesDosObjetos = console.log(Object.keys(objetos))

const mostreOsValoresDosObjetos = console.log(Object.values(objetos))

const mostreOObjetoInteiro = console.log(Object.entries(objetos))

