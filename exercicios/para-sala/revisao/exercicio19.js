//Organizar pessoas por ordem alfabética
let nomes = ['Larissa', 'José Carlos', 'Elizabete', 'Ilzis', 'Wlianna', 'Michelle', 'Laura Julia']
let ordenaLista = nomes.sort()
console.log(ordenaLista)

function ordemAlfabetica(lista) {
    console.table(lista.sort())
}

ordemAlfabetica(nomes)
