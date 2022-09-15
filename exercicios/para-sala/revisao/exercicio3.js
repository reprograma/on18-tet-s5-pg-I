// Armazene separadamente, todos os tipos de dados que aprendeu até hoje.


// Number: fora de aspas, pois se estiver dentro será considerado como string 
const numberInt = 25; 
const numberFloat = 3.88; // decimal´

const texto = 'Olá mundo!'; // pode ser aspas duplas, simples, ou crases ``
const TemplateString = `A soma entre ${9} e ${16} é igual a ${numberInt}`; // dados dentro de ${} não são considerados como string, o js entende como variavel

const verdadeiro = true;
const falso = false;

// undefined: a variavel está declarada mas ainda não tem um valor definido a ela
// null: um objeto que não existe

const objeto = {
    nome: 'Paloma',
    idade: '23',
    cidade: 'Brasília-DF',
}



console.log('----------------------------------------');
console.log('Tipo númerico inteiro:', numberInt);
console.log('Tipo númerico float(decimal):', numberFloat);
console.log('Tipo string:', texto);
console.log('Tipo string:', TemplateString);
console.log(`Tipo booleano: ${verdadeiro} e ${falso}`);
console.log('Objeto: uma coleção de dados:', objeto);
console.log()




