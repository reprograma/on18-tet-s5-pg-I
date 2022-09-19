/* Reescreva a função abaixo utilizando 
Arrow Function */

<<<<<<< HEAD
// function getUser(id, nome) {
//   return {
//     id: id,
//     nome: nome
//   }
// }

let getUser = (id, nome) => {
  console.log(id, nome);
};

getUser("\n13", "\nBrizza");


// const getUser = () => ({name: "Brizza", id: 13});
   
  
//  console.log( getUser())
=======
/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

let getUser = ((id, nome) => {
    return {
        id: id,
        nome: nome
    }
})


console.log(getUser(123, "Jéssica"))
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
