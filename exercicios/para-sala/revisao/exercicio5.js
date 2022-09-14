/*Crie um objeto chamado animal com as seguintes propriedades e valores:
    porte = grande
    especie = cachorro
    raca = golden
*/

function animal(porte, especie, raca) {
    let animal = {
        porte: porte,
        especie: especie,
        raca: raca
    }
    console.log(animal);
}
animal("grande", "cachorro", "golden");