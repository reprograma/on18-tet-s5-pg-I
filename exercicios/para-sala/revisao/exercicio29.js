/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */
let pontuação = 0

function retornarNota (pontuação) {
    
    if (pontuação >= 90){
        console.log("Sua Nota é A");
        
    } else  if (pontuação > 80 && pontuação < 90){
        console.log("Sua Nota é B");
        
    } else  if (pontuação > 70 && pontuação < 80){
        console.log("Sua Nota é C");

    } else if (pontuação > 65 && pontuação < 70 ){
        console.log("Sua nota é D");
    
    } else{
        console.log("sua nota é F")
    }
    
}
retornarNota(64)