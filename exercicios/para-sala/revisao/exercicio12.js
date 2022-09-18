// Dado uma variável
// const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];

/*Utilizando o método join(), converta o array para string e insira o traço entre cada palavra.
Desta forma:*/
<<<<<<< HEAD
// "Pikachu-Bulbassauro-Charizard-Squirtle-Toguepi-Meowth"

// Primeira resolução:

// const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];
// console.log(pokemon.join( '-' ))

// Segunda resolução:

const pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];
function juntarElementosLista(lista){
    console.log(lista.join("-"))
    
}
juntarElementosLista(pokemon)
=======
//"Pikachu-Bulbassauro-Charizard-Squirtle-Toguepi-Meowth"

let modificarPokemon = pokemon.join("-")

console.log(modificarPokemon)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
