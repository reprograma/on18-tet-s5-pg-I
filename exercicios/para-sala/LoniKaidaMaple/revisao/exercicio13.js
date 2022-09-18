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
    { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }
];

<<<<<<< HEAD:exercicios/para-sala/Loni Kaida Maple/revisao/exercicio13.js
const filterBy = colaboradores.filter((colaborador) => colaborador.funcao=="Desenvolvedora");
for(a of filterBy){
    console.log("%c Colaboradores: "+a.PrimeiroNome, 'color: #f89ee6');
}

=======
const filtrarColaboradores = colaboradores.filter(colaboradora => {
    const filtrarDesenvolvedora = colaboradora.funcao === 'Desenvolvedora';

    return getDesenvolvedoras
})

console.log(filtrarColaboradores)
>>>>>>> 764dc6af21ddba7be5add8c1d7ab8e45e0fa8913:exercicios/para-sala/revisao/exercicio13.js
