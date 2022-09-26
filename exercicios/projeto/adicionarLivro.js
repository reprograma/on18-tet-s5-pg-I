const read = require("readline-sync");
const fs = require("fs");

const adicionarLivro = () => {
  const opcaoInicial = read
    .question(`Você deseja adicionar um livro? S/N `)
    .toUpperCase();

  if (opcaoInicial === "S") {
    const titulo = read.question(`Digite o nome do livro: `);
    const categoria = read.question(`Digite a categoria do livro: `);
    const paginas = parseInt(
      read.question(`Digita o numero de paginas do livro: `)
    );
    let leu = read.question(`Você leu o livro? S/N `).toUpperCase();
    let recomenda = read.question(`Você recomenda o livro? S/N `).toUpperCase();
    leu = leu === "S" ? true : false;
    recomenda = recomenda === "S" ? true : false;

    let livro = {
      titulo: titulo,
      categoria: categoria,
      paginas: paginas,
      leu: leu,
      recomenda: recomenda,
    };
    console.table(livro);
    const confirma = read
      .question("Você confirma os dados inseridos acima? S/N ")
      .toUpperCase();

    if (confirma === "S") {
      let json = JSON.parse(fs.readFileSync("./database.json"));
      json.push(livro);
      fs.writeFileSync("./database.json", JSON.stringify(json));
      console.log(`Livro adicionado com sucesso!`);
    }
  }
};

module.exports = adicionarLivro;
