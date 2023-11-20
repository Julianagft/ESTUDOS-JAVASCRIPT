// Usando funções para construir objetos (FUNÇÃO CONSTRUTORA);

// Para uma função construtora é interessante que ela comece com a letra maiúscula como forma de diferenciação.

function Gato(name = "", race = "") {
    this.nome = name;
    this.raca = race;
};


let gatoGordo = new Gato("Gordo", "rajadinho"); // A palavra reservada "new" é obrigatório em funções construtoras
let gatoFeia = new Gato("Feinha");


console.log(gatoGordo);
console.log(gatoFeia);
