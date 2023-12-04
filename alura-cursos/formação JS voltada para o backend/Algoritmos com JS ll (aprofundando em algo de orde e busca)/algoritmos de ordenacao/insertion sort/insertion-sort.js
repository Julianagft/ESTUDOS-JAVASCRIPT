const listaLivros = require('./array');

function insertionSort(vetor) {
    let atual;

    for(let i = 1; i < vetor.length; i++) {
        let j = i - 1 // representa a posição onde já está tudo ordenado;
        atual = vetor[i];
        
        while (j >=0 && atual.preco < vetor[j].preco) { // enquanto atual >= 0 e enquanto a posição atual ainda tenha espaço para se mover para a esquerda (não tenha encontrado um valor menor ou a primeira posição)
            vetor[j + 1] = vetor[j] // enquanto isso for verdade a posição do atual no vetor vai receber esse valor q é maior do que ele.
            j-- // decremento o j para buscar os demais valores q já estão ordenados;
        }
        vetor[j+1] = atual; // quando n for mais verdade
    }

    return vetor;
}

console.log(insertionSort(listaLivros));