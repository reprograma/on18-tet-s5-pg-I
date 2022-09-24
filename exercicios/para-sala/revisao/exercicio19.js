//Organizar pessoas por ordem alfabética

const pessoas = ['João Gabriel','Alexandre','Luciana','Rafael','Ingrid','Antonia,','Elias']
const listarEmOrdemAlfabetica = pessoas.sort()
const listarEmOrdemAlfabeticaComSpread = [...pessoas].sort((a,b)=> a-b)
console.log('array desordenado',pessoas)
console.log('com sort :',listarEmOrdemAlfabetica)
console.log('com spread:',listarEmOrdemAlfabeticaComSpread)
