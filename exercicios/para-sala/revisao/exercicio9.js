// Dado uma lista:
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

/*Remova a última posição que é o nome Beatriz.
Em seguida, mostre no console.log*/




function remov (nome, nome1){
nome1.pop(nome);
console.log(nome1)
}
remov("Beatriz", listaNomes)