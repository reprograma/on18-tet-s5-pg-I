const read = require("readline-sync");
const livros = require("./database");

const getLivroOrdenado = () => {
  const opcaoInicial = read
    .question(`Você deseja procurar por ordem? S/N `)
    .toUpperCase();

  if (opcaoInicial === "S") {
    const filtro = read
      .question(
        "Ordenar por titulo/categoria/paginas (deixe em branco para titulo): "
      )
      .toUpperCase()
      .trim();

    let getInfoLivros = undefined;

    if (["TITULO", "CATEGORIA", ""].includes(filtro)) {
      getInfoLivros = livros.sort((a, b) => {
        let propriedadeA = (propriedadeB = undefined);
        if (filtro === "CATEGORIA") {
          propriedadeA = a.categoria.toUpperCase();
          propriedadeB = b.categoria.toUpperCase();
        } else {
          propriedadeA = a.titulo.toUpperCase();
          propriedadeB = b.titulo.toUpperCase();
        }

        if (propriedadeA < propriedadeB) {
          return -1;
        }
        if (propriedadeA > propriedadeB) {
          return 1;
        }

        return 0;
      });
    } else if (filtro === "PAGINAS") {
      getInfoLivros = livros.sort((a, b) => a.paginas - b.paginas);
    }
    try {
      console.table(getInfoLivros);
    } catch (err) {
      console.log("Ops não entendi...");
      console.log(err);
    }
  }
};

module.exports = getLivroOrdenado;
