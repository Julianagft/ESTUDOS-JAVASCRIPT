const listaLivros = require("./array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita) {
    if(array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);

        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual-1);
        } 

        if(indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
    
    return array;
}

//Precisa retornar o indice que vamos usar de marcador de termino do próximmo array;
function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda; // Na primeira chamada sera = 0;
    let atualDireita = direita; // Na primeira chamada sera = 10;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) { // cuida da iteração que vai da esquerda pra direita;
            // enquanto os elementos menores estiverem a esquerda de pivo eles estarão na posição correta, então incrementamos a variavel atualEsquerda.

            atualEsquerda++ //a variavel percorre de um em um
        }
        
        while (array[atualDireita] > pivo.preco) { // cuida da iteração que vai da direita pra esquerda;

        // Enquanto os elemntos maiores que o pivo estiverem a sua direita eles estão no lugar certo. IDecrementamos a variavel atualDireita para que percorra de um em um começando do final e indo em direção ao começo.
        
        atualDireita--
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++
            atualDireita--
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));