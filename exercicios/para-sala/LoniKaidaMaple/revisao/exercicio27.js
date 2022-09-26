/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

let getUser = ((id, nome) => {
//<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio27.js
  return {
    id: id,
    nome: nome
  }
})

console.log(getUser("pipipopo","Panda"));

console.log(getUser(123, "Jéssica"))
//>>>>>>> 764dc6af21ddba7be5add8c1d7ab8e45e0fa8913:exercicios/para-sala/revisao/exercicio27.js
