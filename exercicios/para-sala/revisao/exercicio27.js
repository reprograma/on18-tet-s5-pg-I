/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

const getUser = (id, nome) => ({
  id: id,
  nome: nome
});

console.log(getUser(1, "Xisperia"));