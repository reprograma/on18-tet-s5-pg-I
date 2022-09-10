/*Crie um objeto curso que receba as propriedades: nome, período, professora.
Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log */


let Curso=[
  {
         'nome':'Medicina',
         'período':5,
         'professora':'geovana'
  },
]


Curso.forEach(valor=>{
    let nomeCurso=valor.nome
    let periodoCurso=valor.período
    let professoraCurso=valor.período

console.log('O nome do curso é:', nomeCurso)
console.log('O periodo do curso é:', periodoCurso)
console.log('O nome da professora do curso é:', professoraCurso)
})


console.log(Curso)