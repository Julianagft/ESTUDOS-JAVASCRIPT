

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone:["1183838765", "11987675432"],
};

cliente.enderecos = [{
    rua: "Rua Professor Edgar de Arruda",
    numero: 422,
    apartamento: false,
    complemento: false,
},
];

cliente.enderecos.push({
    rua: "Rua Padre Sá Leitão",
    numero: 560,
    apartamento: true,
    complemento: "apt 301 Bloco 2",
});

function LigaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando pra ${telefoneResidencial}`)
}

LigaParaCliente(cliente.telefone[0], cliente.telefone[1]);

// FAZENDO A MESMA COISA USANDO SINTAXE DE ESPALHAMENTO:

LigaParaCliente(...cliente.telefone); // Funciona exatamente da mesma forma! 

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[1], // Espalho o array diretamente dentro do objeto;
}

console.log(encomenda);