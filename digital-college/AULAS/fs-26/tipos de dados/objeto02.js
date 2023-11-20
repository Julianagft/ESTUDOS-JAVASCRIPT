let pessoa1 = {
    nome: 'Juliana',
    sobrenome: 'Rodrigues',
    idade: 28
}

let pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 35
};

const resulBancoDeDados =  [pessoa1, pessoa2];

const resultado = resulBancoDeDados.map(function(pessoa){
    return pessoa.nome
}); 

console.log(resultado);