// Armazene separadamente, todos os tipos de dados que aprendeu até hoje.
let a,b,c,d,e,f,g,h;
class Player {
    _name;
    _lv;
    _hp;
}
let mauricio = Player;

mauricio._name="Mauricio";
mauricio._hp=200;
mauricio._lv=4;

a=99;
b="pikachu";
c=true;
d=1.99;
e=[a,b,c,d];
f=["charizard",e];
g=[
    {
        produto: "agua",
        preço: 2.50
    }
];
h=[f,g[0].produto,g[0].preço,mauricio._name,mauricio._lv,mauricio._hp];
console.log("%c :   "+h, 'color: #0293fd');
