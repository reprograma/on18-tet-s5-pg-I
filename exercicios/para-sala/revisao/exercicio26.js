/*Crie uma função que receba o parametro ano de nascimento
e retorne a idade a partir do ano atual */

const calcularIdade = (anoNascimento) => {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoNascimento;
};

console.log(calcularIdade(1999) + " anos de idade.");
