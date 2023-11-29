const livros = require('../objetos-livros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato= posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    };

    return maisBarato  
}


module.exports = menorValor;

// Nós começamos  a nossa verificação a partir do índice 0, mas depois que o índice 0 já está ordenado, nós não precisamos mais nos preocupar com ele, podemos começar a nossa verificação na próxima vez a partir do índice 1, depois a partir do índice 2, etc.

// Por isso let atual = posicaoInicial

//  Por isso, nós vamos passar o nosso índice inicial por parâmetro e, para cada loop, a nossa função vai retornar qual é o índice referente ao produto mais barato.

// Dentro do nosso for não é mais livros porque vamos estar trabalhando com um array genérico, então arrProdutos.length, e a mesma coisa dentro do if, arrProdutos na posição [atual] for menor do que arrProdutos[maisBarato]preco.

// A posicaoInicial agora vai ser igual a maisBarato, porque é onde nós começamos a fazer as comparações.

