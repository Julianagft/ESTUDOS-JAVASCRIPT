const cliente = {
    codigo: 16532,
    nome: 'Ana',
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apt 101 Bloco B',
        pontosRef: [ //Poderia ser objetos tbm, so queria exemplificar que tbm poderia usar ARRAY;
            'Hospital x',
            'Shopping Y',
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0]);
