const pares = [1,3,5];
const impares = [2,4,6];

 const numeros = [...pares, ...impares]; // MATRIZ

 console.log(numeros);

 // Sem os três pontos(...) o retorno no console seria [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]. OS três pontos servem para que o console retorne apenas os dados  dentro do array;

 // EXEMPLO 01:

//  const num1 = 1;
//  const num2 = 2;

const [num1, num2, ...outrosnum] = [1,2,3,4,5]; // exatamente a mesma coisa que as linhas d,e cima;
console.log(num1, num2, ...outrosnum);

//Os três pontos aqui servem para dois propositos:

// Na const serve para que o indice 2 pegue todos os numeros a partir do '3' (caso contrario pegaria apenas o 3);
// No console.log serve para exibir apenas os dados internos do array (sem que mostre os colchetes []);

// EXEMPLO 02 (OBJETOS):

const pessoa = {
    nome: 'Ju',
    idade: 28,
}

const pessoaOutrosDados = {...pessoa, telefone: 8569857, cidade: 'Fortaleza'}

console.log (pessoaOutrosDados);

// Usando a desestruturação:

const {nome, idade, cidade, telefone} = pessoaOutrosDados

console.log(nome); //vai exibir só o nome dentro do objeto; 

// Eu poderia fazer isso com qualquer outro dado dentro do objeto;