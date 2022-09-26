const read = require("readline-sync");
const livros = require("./database");

const getLivroLido = () => {
  const opcaoInicial = read
    .question(`Você deseja buscar os livros lidos? S/N `)
    .toUpperCase();

  if (opcaoInicial === "S") {
    const getInfoLivros = livros.filter((livro) => livro.leu === true);

    console.table(getInfoLivros);
  }
};

module.exports = getLivroLido;
