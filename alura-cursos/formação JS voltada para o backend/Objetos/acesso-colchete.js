// Acessando um atributo de um objeto através dos colchetes:

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf : "112254873",
    email: "emaildapessoa@email.com"
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);


// Acessar com os colchetes é útil em casos em que não temos acesso fácil as informações do objeto. Nesse caso o javaScript nos mostra;

 // Exemplo como se não soubéssemos os valores do objeto:

 const chaves = ["nome", "idade", "cpf", "email"];

 chaves.forEach((chave) => console.log(`A chave ${chave} tem valor ${cliente[chave]}`));

