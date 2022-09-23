// Armazene separadamente, todos os tipos de dados que aprendeu até hoje.


const moradores = {
    responsavel: { nome: "Joel", sobrenome: "Lemos" },
    apartemento: 207,
    qtdMoradores: 3,
    nomeMoradores: ["Carina", "Fernando"],
    cargo: () => console.log("Síndico"),
  };//objeto

let ocupado = true  //booleano

console.log("Object: ",moradores,"Boolean: ", ocupado)
moradores.cargo()//chamando a função cargo do objeto morador  
