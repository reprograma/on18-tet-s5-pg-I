/*O filter() permite remover elementos que não se encaixam em determinados critérios.
É incrivelmente útil para desmontar grandes arrays, para que possamos escolher apenas os itens que queremos.
____________________________
Enviar uma mensagem apenas as colaboradoras que são Desenvolvedoras.
Podemos usar .filter () para retornar apenas os usuários que se encaixam na função correta.*/

const colaboradores = [
    {PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora'},
    {PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora'},
    {PrimeiroNome: 'Laura', ultimoNome: 'Alves', funcao: 'Publicitário'},
    {PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor'},
    {PrimeiroNome: 'Hanna', ultimoNome: 'Santos', funcao: 'Desenvolvedora'},
    {PrimeiroNome: 'Lilit', ultimoNome: 'Correia', funcao: 'Instrutor'},
    {PrimeiroNome: 'Jessi', ultimoNome: 'Montana', funcao: 'Diretora'}
];

let funcaoDesejada = 0

function filtrarFuncao(funcaoDesejada) {
    const buscaPorFucao = colaboradores.filter((colaborador) => {colaborador.funcao == funcaoDesejada
    return colaborador.funcao.includes(funcaoDesejada)})
    console.log(buscaPorFucao)
}
filtrarFuncao('Desen')

