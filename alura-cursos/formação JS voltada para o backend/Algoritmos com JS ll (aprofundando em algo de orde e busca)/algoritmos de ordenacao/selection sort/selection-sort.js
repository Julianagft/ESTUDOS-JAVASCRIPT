const listaLivros = require('./array');

function selectionSort(vetor) {
    let menor;

    for(let i = 0; i < vetor.length - 1; i++) {
        menor = i // menor inicial

        for (let j = i + 1; j < vetor.length; j++) {    
            // j = i + 1 (compara o primeiro com o segundo)
            if (vetor[j].preco < vetor[menor].preco) { // se eu quisesse ordenar em ordem decrescente ()
                menor = j; 
            }
        }
        if (i != menor) { // Se i for diferente de menor é porque foi encontrado algum valor menor que o menor inicial. Então faz-se a troca.
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]]
        } // estamos trocando os valores das posições ao final de cada iteração SE necessário.
    }
    return vetor
}

console.log(selectionSort(listaLivros));

