//Função clássica:

function apresenta(nome) {
    return `Meu nome é ${nome}`;
}

console.log(apresenta('Juliana'));



// ARROW FUNCTIONS 

// Não utiliza nem parentesis nem chaves (a não ser que tenha mais de uma linha);
// É chamada assim por utilisar o sinal => que lembra uma flecha;
// Assim como a expressão de função ela vem sempre com uma const e o nome da variável. Também é anônima (não possui nome);
// Se comporta da mesma forma que as expressões de função com relação ao HOISTING;



//Alguns Exemplos: 

//string
const apresentaArrow = nome => `meu nome é ${nome}`
console.log(apresentaArrow('Juliana'));

//operação aritmética
const soma = (n1, n2) => n1 + n2;
console.log(soma(2,8));

// ARROW FUNCTIONS COM MAIS DE UMA LINHA DE INSTRUÇÃO;

const somaNumerosPequenos = (n1, n2) => {
    if (n1 > 10 || n2 > 10) {
        return 'Somente números de 1 a 10'
    } else {
        return n1 + n2
    }
}

console.log (somaNumerosPequenos(8,6))

// Vantagens da Arrow Function:
/* - Forma rápida e curta de escrever a função;
   - Vantagens ao trabalhar com objetos;
*/