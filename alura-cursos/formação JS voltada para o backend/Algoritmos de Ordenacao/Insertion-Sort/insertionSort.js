const livros = require("./objetos-livros");

function insertionSort(lista) {
    
    for(let atual = 0; atual < lista.length; atual++) {
        let analise = atual;

        while (analise>0 && lista[analise].preco < lista[analise- 1].preco) {
        let itemAnalise = lista[analise];
        let itemAnterior = lista[analise - 1];

        lista[analise] = itemAnterior;
        lista[analise - 1] = itemAnalise;

        analise--;
        }
    }
    
    console.log(lista);
}

insertionSort(livros);

// A analise começa com 0 depois vai pra 1,2 e assim sucessivamente. 
// O primeiro elemento não tem o que comparar pois não tem nada a sua esquerda. Na segunda rodada do looping ela ja passa de 0 para 1 (ja que atual também passa);
// Ja que agora analise é > 0 passamos para o laço while;
// lista [analise].preco. Qual é o preço do elemento que está em lista na posição analise?
// Agora é lista na posição 1. O valor dele é 15 enquanto ele for menor do que o elemento que está em lista na posição [analise – 1]. [analise – 1] é 0, já estava 0, .preco.