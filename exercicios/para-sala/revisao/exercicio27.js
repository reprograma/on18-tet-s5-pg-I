/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/

<<<<<<< HEAD
 const getUser = () => ({name: "Pricila", id: 30});
   
  
 console.log( getUser())


  // })
=======
let getUser = ((id, nome) => {
    return {
        id: id,
        nome: nome
    }
})


console.log(getUser(123, "Jéssica"))
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
