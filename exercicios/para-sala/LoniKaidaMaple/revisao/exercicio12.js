// Dado uma variável
const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];

/*Utilizando o método join(), converta o array para string e insira o traço entre cada palavra.
Desta forma:*/
//"Pikachu-Bulbassauro-Charizard-Squirtle-Toguepi-Meowth"
//<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio12.js
pokemon.join("-");
console.log("%c Pokemanos: "+pokemon.join("-"), 'color: #f89ee6');
//=======

let modificarPokemon = pokemon.join("-")

console.log(modificarPokemon)
//>>>>>>> 764dc6af21ddba7be5add8c1d7ab8e45e0fa8913:exercicios/para-sala/revisao/exercicio12.js
