// MERGE SORT (PASSO A PASSO)

const {edGalho, edFolha } = require('./arrays');

function juntaListas(l1,l2) {
    let listaFinal = [];
    // Usamos essas variáveis para controlar qual o elemento está sendo analisado por vez.

    let posicaoAtualL1 = 0; //Esse 0 se refere ao índice do array onde vamos começar.
    let posicaoAtualL2 = 0;

    let atual = 0; // Essa é a variável que vai manejar em que posição o array final está no momento, também começando com 0.

    while (posicaoAtualL1 < l1.length && posicaoAtualL2 < l2.length) {
        // As variáveis que eu chamei de posição atual cuidam só do índice, elas não têm o objeto que tem título e preço, que é o dado que queremos mudar de lugar ou não, por isso criamos as variaveis posicaoAtual.

        // Então criamos essa variável que eu estou chamando de “produtoAtual” de cada uma das listas, usando a notação do JavaScript, para acessar um valor num índice de um array, acessando o array l1 na posição que é relativa ao número, então a “posicaoAtualL1” começa com 0 e vai sendo percorrido.
        let produtoAtualL1 = l1[posicaoAtualL1];
        let produtoAtualL2 = l2[posicaoAtualL2];
        
        // Se o preco da lista 1 for menor que o da lista 2 passamos esse elemento para a lista final.
        if (produtoAtualL1.preco < produtoAtualL2.preco) {
            listaFinal[atual] = produtoAtualL1;
            posicaoAtualL1++;
        } else {
                listaFinal[atual] = produtoAtualL2;
                posicaoAtualL2++;
        }

        atual++; //A lista atual sempre irá se movimentar idependente de termos mechido na l1 ou na l2;
    };

    while (posicaoAtualL1 < l1.length) {
        listaFinal[atual] = l1[posicaoAtualL1]
        posicaoAtualL1++;
        atual++;
    }

    while (posicaoAtualL2 < l2.length) {
        listaFinal[atual] = l2[posicaoAtualL2]
        posicaoAtualL2++;
        atual++;
    }

    return listaFinal

    // A vantagem do while é que ele só sai do laço depois que ele tiver finalizado todo o processo. Enntão não corre o risco dele executar os trÊs laços ao mesmo tempo.

}

console.log(juntaListas(edGalho, edFolha));