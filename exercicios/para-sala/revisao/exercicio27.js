/* Reescreva a função abaixo utilizando 
Arrow Function */

/*function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}*/
//1ª resolução
// let getUser = (id, nome) => {
//   console.log(id, nome);
// };
// getUser("\n50", "\nGrazielle",);

//2ª resolução
const getUser = () => ({ name: "Pricila", id: 30 });
console.log(getUser())