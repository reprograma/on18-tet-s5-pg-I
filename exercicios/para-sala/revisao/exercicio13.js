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


 let desenvolvedoras = []
 let filtro = colaboradores.filter((item) => item.funcao == 'Desenvolvedora')
 console.log(filtro)


function filtrar(lista){
    for (item of lista){
        if (item.funcao == "Desenvolvedora"){
            desenvolvedoras.push(item.PrimeiroNome)
            console.log(`Enviar mensagem para ${item.PrimeiroNome}`)
        }else{
            console.log(`Não enviar mensagem para ${item.PrimeiroNome}`)
        }
      }
    }

 filtrar(colaboradores)