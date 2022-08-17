/*
    class List{
    constructor(){
        this.data = []
    }
    add(nome){
        this.data.push(nome);
        console.log(this.data);
    }
}

class ToList extends List{
    constructor(){
        super();
        this.usuario = 'Luan';
    }

    getUsuario(){
        console.log(this.usuario)
    }

    static soma(a, b){
        return a + b;
    }
    
}

//const tolist = new ToList()

//document.getElementById('novotodo').onclick = function(){
//    tolist.add('Luan');
//    tolist.getUsuario();
//}

//console.log(ToList.soma(1, 2))

//var nome = "luan";

//const nome = "Luan";

const nome = {primeiro_nome: "luan"}; 

nome.primeiro_nome = 'joao';

console.log(nome);

function teste (x){
    let y = 4;
    if(x>2){
        y = 6
        console.log(x, y)
    }
}

console.log(teste(10))
//console.log(y)


const arr = [1, 2, 3, 4, 6, 8, 9]

const newArr = arr.map(function(item){
    return item = 2;
})

console.log(newArr)

const reduce = arr.reduce(function(total,next){
    return total + next;
})

console.log(soma)

const filter = arr.filter(function(item){
    return item % 2 === 0;
})

console.log(filter)

const find = arr.find(function(item){
    return item === 3;
})

console.log(find)


const newArr = arr.map(item=>item * 2)
console.log(newArr)

const teste = () => {
    return {nome: 'Luan'}
}
console.log(teste())

*/

function some(a=2, b=3){
    return a+b;
}

console.log(soma())
