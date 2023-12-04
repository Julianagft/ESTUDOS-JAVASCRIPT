// MERGE SORT PART E CHAMADAS RECURSIVAS 
// Forma mais usual de se trabalhar com Merge Sort;

const listaLivros = require("./array.js");

function mergeSort(array) {
    if (array.length > 1) {
        // Sempre que se divide um indice ao meio (/2) precisa ser um número inteiro, pois se for um umero quebrado não irá conseguir localizá-lo no indice. Por isso utilizamos o Math.floor, que arredonda o numero pra baixo.
        const meio = Math.floor(array.length / 2);

        // Para dividir o array em duas partes usamos o slice.
        const parte1 =  mergeSort(array.slice(0,meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        //Aqui eu estou fazendo chamadas recursivas para a função mergeSort que eu defini.
        
        array = ordena(parte1, parte2);
    }

    return array
}

function ordena(parte1, parte2) {
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;
    const resultado = [];

    while(posicaoAtual1 < parte1.length && posicaoAtual2 < parte2.length) {
        let produtoAtual1 = parte1[posicaoAtual1];
        let produtoAtual2 = parte2[posicaoAtual2];

        if (produtoAtual1.preco < produtoAtual2.preco) {
            resultado.push(produtoAtual1)
            posicaoAtual1++
        } else {
            resultado.push(produtoAtual2)
            posicaoAtual2++
        }
    }
    //Aqui verificamos se ficou sobrando algum elemnto em uma das listas usando o concat. 
    // Vamos concatenar o que temos no array de resultado e com qualquer elemento que tenha sobrado dentro dos arrays. Precisamos fazer uma comparação.

    return resultado.concat(posicaoAtual1 < parte1.length ? parte1.slice(posicaoAtual1) : parte2.slice(posicaoAtual2));

    // Se a posiçãoAtual1 for mennor que parte1.length significa que tem algo sobrando no array.
    // Se passarmos apenas um parâmetro para o método slice, ele vai fatiar desse parâmetro para o final. Então se passarmos só ? parte1.slice(posicaoAtualParte1), vai pegar a posição atual parte 1, fatiar até o final, não sabemos quantos elementos têm, e concatenar isso com o array resultado. Ou seja, vai juntar os dois arrays. Como ele vai juntar a partir do final, vai pegar o que tinha no resultado e grudar com o restante da parte 1.
}

// Não precisamos criar aquela variavel atual = 0 pois estamos usando o push que sempre manda o elemento que estamos usando como parametro para o final do array;

console.log(mergeSort(listaLivros));