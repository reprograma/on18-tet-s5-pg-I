/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/


// Está ok
let mostrarUsuaria = (id, nome) => {
  return console.log( {
    id: id,
    nome: nome
  })
}

mostrarUsuaria(5002, "Camila")

