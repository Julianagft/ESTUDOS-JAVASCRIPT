// Percorrer uma lista de livros para descobrir qual o mais barato. Agora com um array de objetos.

const livros = require('./objetos-livros.js');

let maisBarato = 0;

// Agora que estamos trabalhando com objetos precisamos especificar qual a propriedade que vamos fazer a comparação. No caso, preco.

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato é ${livros[maisBarato].titulo}, que custa ${livros[maisBarato].preco}!`);

