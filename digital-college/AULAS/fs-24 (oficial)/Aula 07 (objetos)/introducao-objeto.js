let carro = {
    marca: "Renault",
    ano: 2019,
    cor: "branco",
    modelo:207,
    preco: 37800,
};

let pessoa = {
    nome: "Maria Juliana",
    sobrenome: "Campos Rodrigues",
    idade: 28,
    cpf: "09813637",
}

console.log(carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log(`Pessoa: ${pessoa["nome"]}, idade: ${pessoa.idade}!`);


// CURIOSIDADE: Em resumo, toString() é usado para obter uma representação de string simples de um objeto, enquanto toLocaleString() é usado para obter uma representação de string formatada com base nas configurações locais, especialmente útil ao lidar com números e formatação de datas.