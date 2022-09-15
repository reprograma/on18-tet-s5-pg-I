/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

const getUser = (id,nome) => {
  return{
    id: id,
    nome: nome
  }
}

console.log(getUser)

getUser("25","Natalia")