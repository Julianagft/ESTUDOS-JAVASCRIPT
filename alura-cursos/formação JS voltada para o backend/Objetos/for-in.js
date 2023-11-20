// FOR...IN 

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

for (let chave in cliente) {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
}

// O FOR IN vai iterar em cada elemento do objeto. 