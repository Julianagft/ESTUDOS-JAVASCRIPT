let pessoa = {
    nome: 'Juliana',
    sobrenome: 'Rodrigues',
    idade: 28
}

function pessoaDados(p) {
    return `Meu nome é ${p.nome} ${p.sobrenome} e tenho ${p.idade} anos de idade`
}

console.log(pessoaDados(pessoa))