const read = require("readline-sync");
const livros = require("./database");

const getCategoria = () => {
  const opcaoInicial = read
    .question(`Você deseja procurar por categorias? S/N `)
    .toUpperCase();

  if (opcaoInicial === "S") {
    const getInfoLivros = livros.map((livro) => {
      return {
        titulo: livro.titulo,
        categoria: livro.categoria,
      };
    });
    console.table(getInfoLivros);

    const inputCategoria = read
      .question(`Digite a categoria conforme a tabela acima: `)
      .toUpperCase();

    const filtrarCategoriaEscolhida = livros.filter(
      (livro) => livro.categoria.toUpperCase() === inputCategoria
    );

    console.table(filtrarCategoriaEscolhida);
  }
};

module.exports = getCategoria;
