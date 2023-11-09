// forEach 

const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

notas.forEach(function (n, i, a) { //Ela vai ser chamada para cada elemento do array; 
    somaNotas += n;
    // console.log(i);
    // console.log(a);
});

// n = nomes;
// i = índice;
// a = array;

const media = somaNotas/notas.length
console.log(`A média das notas é ${media}.`);

//Parece o for of mas ele tem uma vantagem pois eu posso acrescentar um outro paâmetro para acessar o índice, caso eu deseje;

// O forEach recebe uma função que tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente

// Bem mais utilizado que o for of;