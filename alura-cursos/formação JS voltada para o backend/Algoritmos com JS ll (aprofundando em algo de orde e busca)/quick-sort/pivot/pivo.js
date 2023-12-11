const listaLivros = require('./array');

function encontraMenores(pivo, array) { // essa função conta a quantidade de elementos menores que o pivo existem no array;
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }; 
    trocaLugar(array, array.indexOf(pivo), menores);
    return array
};

function trocaLugar(array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}

function divideNoPivo(array) {
    // ÉNão é uma boa prática pegar o pprimeiro elemento do array para ser o pivo.
    // Nesse código usaremos o elemento do meio como o PIVO;
    
    let pivo = array[Math.floor(array.length / 2)]; // Vai arredondar o valor pra baixo;
    encontraMenores(pivo, array); // è a função que troca o pivo de lugar e o coloca em sua posição correta;

    let valoresMenores = 0; //controla quantos menores a gente encontra;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array,analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array;
}

console.log(divideNoPivo(listaLivros));
// console.log(encontraMenores(listaLivros[2], listaLivros));