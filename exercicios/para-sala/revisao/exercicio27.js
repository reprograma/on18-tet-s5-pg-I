/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

let getUser = (id, nome) => {
  console.log(id, nome);};
getUser("39\n", "Gabriela",);

/*2ª resolução
const getUser = () => ({ name: "Jéss", id: 39 });
console.log(getUser())*/


