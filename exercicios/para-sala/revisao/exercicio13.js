/*O filter() permite remover elementos que não se encaixam em determinados critérios.
É incrivelmente útil para desmontar grandes arrays, para que possamos escolher apenas os itens que queremos.
____________________________
Imagine que queremos enviar uma mensagem apenas aos colaboradores que são Desenvolvedoras.
Podemos usar .filter () para retornar apenas os usuários que se encaixam na função correta.*/

const colaboradores = [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
    { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
    { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
    { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
<<<<<<< HEAD
    { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' },

           
]

function mensagemAosColaboradoresDevs(lista, profissao) {

    let encontraColaborador = lista.filter((lista) => lista.funcao == profissao)

    console.table(encontraColaborador);

}



mensagemAosColaboradoresDevs(colaboradores, "Desenvolvedora")

=======
    { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }
];

const filtrarColaboradores = colaboradores.filter(colaboradora => {
    const filtrarDesenvolvedora = colaboradora.funcao === 'Desenvolvedora';

    return getDesenvolvedoras
})

console.log(filtrarColaboradores)
>>>>>>> 7e8baed7bdd07ab6eaf9b7860aee83a52702a75a
