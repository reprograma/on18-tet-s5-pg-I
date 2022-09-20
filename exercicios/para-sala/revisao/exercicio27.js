/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

<<<<<<< HEAD
let getUser = (id, nome) => {
  console.log(id, nome);};
getUser("39\n", "Gabriela",);

/*2ª resolução
const getUser = () => ({ name: "Jéss", id: 39 });
console.log(getUser())*/


=======
let getUser = ((id, nome) => {
    return {
        id: id,
        nome: nome
    }
})


console.log(getUser(123, "Jéssica"))
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
