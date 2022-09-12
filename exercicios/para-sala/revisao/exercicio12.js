// Dado uma variável
// const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];

/*Utilizando o método join(), converta o array para string e insira o traço entre cada palavra.
Desta forma:*/
// "Pikachu-Bulbassauro-Charizard-Squirtle-Toguepi-Meowth"

// Primeira resolução:

// const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];
// console.log(pokemon.join( '-' ))

// Segunda resolução:

const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];
function pokemonJunto(lista){
    console.log(lista.join("-"))
    
}
pokemonJunto(pokemon)