/*Crie um objeto chamado animal com as seguintes propriedades e valores:
    porte = grande
    especie = cachorro
    raca = golden
*/

// console.table(animal);

function animal(porte, especie, raca) {
    let animal = {
        porte: porte,
        especie: especie,
        raca: raca
    }
    console.log(animal);
}
animal("grande", "cachorro", "golden");
animal("pequeno", "cachorro", "SRD");
animal("pequeno", "gato", "SRD");