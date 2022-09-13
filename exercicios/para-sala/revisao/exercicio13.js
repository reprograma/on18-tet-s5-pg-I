/*O filter() permite remover elementos que não se encaixam em determinados critérios.
É incrivelmente útil para desmontar grandes arrays, para que possamos escolher apenas os itens que queremos.
____________________________
Imagine que queremos enviar uma mensagem apenas aos colaboradores que são Desenvolvedoras.
Podemos usar .filter () para retornar apenas os usuários que se encaixam na função correta.*/

// const colaboradores = [{ PrimeiroNome: 'Ana', ultimoNome: 'Bouley', funcao: 'Desenvolvedora' },
//     { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
//     { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
//     { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
//     { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
//     { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
//     { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }
// ];



// Primeira resolução:

// const buscaDevs = colaboradores.filter (function(buscaDevs){
//     return buscaDevs.funcao == 'Desenvolvedora'
//     })
//     console.log(buscaDevs)


// Segunda resolução:

const colaboradores = [{ PrimeiroNome: 'Ana', ultimoNome: 'Bouley', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
    { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
    { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
    { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }
];

function mensagemAosColaboradoresDevs(lista, profissao) {
    let encontraColaborador = lista.filter((lista) => lista.funcao == profissao)
    console.table(encontraColaborador);
}

mensagemAosColaboradoresDevs(colaboradores, "Desenvolvedora")