const numeros = [1, 2, 3];

numeros.forEach(function() {
    console.log('Dentro do forEach')
}); //Ele irá executar a função exatamente 6 vezes, de acordo com a quantidade de elementos do ARRAY;


function praCadaElemento() { //Outra maneira de fazer; 
    console.log ('Dentro do forEach');
}


function praCadaElemento (elemento, indice, array) {
    console.log(elemento, indice, array); //Forma de declarar o elemento juntamente com o indice e o Array completo;
}
/* Podemos declarar: 1- ELEMENTO;
                     2- INDICE;
                     3- ARRAY completo; */
//OBS: Não posso declarar o Array sem o índice, pois o segundo elemento sempre será o INDICE;

function praCadaElemento (elemento, indice, array) {
    console.log(elemento, indice, array)
}

numeros.forEach(praCadaElemento); 

numeros.forEach(function (_, i){ //Aqui eu estou declarando apenas o indice;
    console.log(i)
}) //Quando não uso um parâmetro (no caso do el), posso declarar como '_';



//for (let n of numeros) {
//    console.log(n);
//}


//for (let i = 0; i < numeros.length; i++) { 
//    console.log (numeros [i]);
//}