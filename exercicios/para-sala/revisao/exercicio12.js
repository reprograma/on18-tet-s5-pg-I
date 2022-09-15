// Dado uma variável
const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];

/*Utilizando o método join(), converta o array para string e insira o traço entre cada palavra.
Desta forma:*/
"Pikachu-Bulbassauro-Charizard-Squirtle-Toguepi-Meowth"

// const myPokemon = pokemon.toString()
// console.log(myPokemon)

const myPokemon2 = pokemon.join("-")
console.log(myPokemon2);
