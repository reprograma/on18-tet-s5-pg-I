//Organizar pessoas por ordem alfabética

let nomes = [
    'Pricila', 'Grazielle', 'Alane', 'Brizza', 'Leticia', 'Luciana', 'Gabriela'

];
// nomes.sort();
// console.log(nomes);

function ordem(alfabetica){
    nomes.sort();
    console.table(nomes); 
}
ordem(nomes)