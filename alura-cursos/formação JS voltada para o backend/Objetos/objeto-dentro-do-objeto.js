// OBJETO DENTRO DE OBJETO

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

const listaApartamentos = cliente.enderecos.filter((endereco)=> endereco.apartamento === true
);

console.log(listaApartamentos); // Vai retornar apenas os endereços com apartamentos;