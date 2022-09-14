// Armazene separadamente, todos os tipos de dados que aprendeu até hoje.
function apresentacaoLuciana() {
    let nome = "Luciana"; //string
    let idade = 40; //number
    let casada = true; //boolean
    let formacaoReprograma; //undefined
    let semNome = "null"; //nulo
    let signo = {
        nome: "Câncer",
        ascendente: "Caprocórnio",
    };
    console.log(
        `Os tipos de dados aprendidos por mim até hoje foram: ${typeof nome}, ${typeof idade}, ${typeof casada}, ${typeof formacaoReprograma}, ${semNome} e ${typeof signo}. `
    );
}

apresentacaoLuciana();