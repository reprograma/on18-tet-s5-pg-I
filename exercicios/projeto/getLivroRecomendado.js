const read = require("readline-sync");
const livros = require("./database");

const getLivroRecomendado = () => {
  const opcaoInicial = read
    .question(`Você deseja buscar os livros recomendados? S/N `)
    .toUpperCase();

  if (opcaoInicial === "S") {
    const getInfoLivros = livros.filter((livro) => livro.recomenda === true);

    console.table(getInfoLivros);
  }
};

module.exports = getLivroRecomendado;
