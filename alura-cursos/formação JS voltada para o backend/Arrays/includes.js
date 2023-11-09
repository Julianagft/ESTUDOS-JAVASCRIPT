
// A função includes() é um método em JavaScript que é usado para verificar se uma string ou um elemento específico está contido em outra string ou array. Ela retorna um valor booleano (true ou false) com base na presença ou ausência do valor procurado.

// A função includes() é útil para verificar a existência de um valor em uma string ou array, tornando o código mais legível e eficiente. 

const frase = "Olá, como você está?";

console.log(frase.includes('Olá')) //TRUE
console.log(frase.includes('Rafael')) //FALSE

console.log(frase.includes('ola')) // FALSE
// Ela é sensível a maiúsculas e minúsculas, o que significa que fará distinção entre maiúsculas e minúsculas ao verificar a presença do valor.


// Exemplo com ARRAYS:

const numeros = [1, 2, 3, 4, 5];

console.log(numeros.includes(3)); //TRUE
console.log(numeros.includes(13)); //FALSE

