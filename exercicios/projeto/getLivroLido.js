const read = require("readline-sync");
const livros = require("./database.json");

const getLivroLido = (foiLido = true) => {
  const opcaoInicial = read
    .question(
      `Você deseja buscar os livros ${foiLido ? "lidos" : "não lidos"}? S/N `
    )
    .toUpperCase();

  if (opcaoInicial === "S") {
    const getInfoLivros = livros.filter((livro) => livro.leu === foiLido);

    console.table(getInfoLivros);
  }
};

module.exports = getLivroLido;
