// Percorrer uma lista de livros para descobrir qual o mais caro.

const livros = require('./objetos-livros.js');

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco > livros[maisCaro].preco) {
        maisCaro = atual;
    }
}

console.log(`O livro mais caro da lista é ${livros[maisCaro].titulo}, que custa ${livros[maisCaro].preco}!`);

