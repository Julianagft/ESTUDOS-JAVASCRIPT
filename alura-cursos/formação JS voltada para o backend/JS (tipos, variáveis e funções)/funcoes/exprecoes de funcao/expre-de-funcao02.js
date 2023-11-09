// PRINCIPAL DIFERENÇA DA EXPRESSÃO DE FUNÇÃO PARA A FUNÇÃO 

//EX:
console.log(apresentar())

function apresentar() {
    return 'Olá!'
}

//Nesse caso mesmo que a chamada esteja antes da função o código funciona sem problema;

//EX EXPRESSÃO DE FUNÇÃO:

console.log(soma(1,2));
const soma = function(n1,n2) { return n1 + n2};

//Nesse caso quando tentamos executar aparece o erro : 'ReferenceError: soma is not defined' por que estamos tentando acessar a variavel soma antes que ela seja definida.

//HOISTING  
//Funções e var são "listadas" no topo;