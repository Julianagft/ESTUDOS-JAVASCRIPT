let x = {};
let y = []; //Assim posso definir um ARRAY;

const produto = {
    nome: 'Caneta', 
    preco: 9.99,
    desconto: 0.2
};
const numeros = [1, 2, 3];

console.log (Array.isArray(y)); //Dessa forma posso averiguar se a variável é ou não um ARRAY;
//Se eu colocar 'X' apareserá 'false' mas quando eu coloco a letra 'Y' aparecerá verdadeiro;

console.log (typeof x); //Sempre que houver um par de chaves {}, isso significa que eu criei um objeto dentro do Java Script;
console.log(typeof produto);

console.log (numeros [0]);
console.log(produto['nome']);// Também posso usar os cochetes, mas em vez de passar um número eu passarei um texto;
//Dentro de protuto eu quero acessar o atributo 'nome'. Consigo acessar dentro de um objeto a partir de um texto (identificador);

console.log(produto.nome); //A forma mais comum de acessar uma informação dentro de um objeto. Através do 'ponto (.)..(EX: produto.nome);
console.log(produto.preco); //Aqui acessei o preço;
console.log(produto.desconto);