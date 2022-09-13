/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

const getUser = () => ({ name: "Luciana", id: 40 });
console.log(getUser());