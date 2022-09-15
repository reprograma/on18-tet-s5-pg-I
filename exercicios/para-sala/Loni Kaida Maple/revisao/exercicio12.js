// Dado uma variável
const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];

/*Utilizando o método join(), converta o array para string e insira o traço entre cada palavra.
Desta forma:*/
//"Pikachu-Bulbassauro-Charizard-Squirtle-Toguepi-Meowth"
pokemon.join("-");
console.log("%c Pokemanos: "+pokemon.join("-"), 'color: #f89ee6');