// Acessando um atributo de um objeto:

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf : "112254873",
    email: "emaildapessoa@email.com"
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
console.log(`Os três primeiros dígitos do CPF cadastrado são ${cliente.cpf.substring(0,3)}`); // Também poderia ter usado o slice();