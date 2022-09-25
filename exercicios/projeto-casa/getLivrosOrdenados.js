const read = require('readline-sync');
const livros = require('./database');



const getMostrarOrdenados = () => {
    const opcaoInicial = read.question( `Voce deseja listar todos os livros ordenados? S/N`).toUpperCase();  
    
    if (opcaoInicial === 'S'){
       // const getInfoLivros=livros.sort()
        const listarEmOrdemAlfabetica =[...livros].sort((a, b) =>{
            if (a.titulo < b.titulo){
                return -1;
            }else if(a.titulo > b.titulo){
                return 1;
            }else{
                return 0;
            }})
           
        console.table(listarEmOrdemAlfabetica) 
    } 

    
        
        
        
             
    }







module.exports = getMostrarOrdenados;