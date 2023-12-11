const listaLivros = require("./arrayOrdenado");

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
};

// Sempre trabalharemos com o meio do array, e este não irá se movimentar durante o processamento da função a cada iteração;

console.log(busca(listaLivros, 0, listaLivros.length-1, 40)); // retornará o índice do elemento buscado.

// Quando não estabelecemos uma condição de parada para a recursão, acontece um proccesso parecido com o loop infinito. 

// A busca binária trabalha com um nível de complexidade muito menor do que a busca linear. Ela cobre muitos elementos com um número bem menor de operações. 