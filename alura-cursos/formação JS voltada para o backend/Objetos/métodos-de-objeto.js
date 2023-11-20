// MÉTODOS DE OBJETO

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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado!")
}
