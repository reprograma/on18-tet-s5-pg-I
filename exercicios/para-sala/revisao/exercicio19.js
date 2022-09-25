//Organizar pessoas por ordem alfabética

let vogais = ["e", "o", "a", "u", "i"]

//guardar na variavel
let organizarVogais = vogais.sort();
console.log("Organizando as vogais: ", vogais);

//com spread
const organizarVogais1 = [...vogais].sort()
console.log(organizarVogais1);

//com if
const organizarVogais2 = [vogais]