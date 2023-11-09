//TIPO 1: Função com parametro e com retorno;
function somar(a,b) { 
    return a+b;
}

let resultado =  somar (30,56); 
console.log ('O resultado final é: ', resultado);
//OU (muito mais simples)

console.log (somar (30, 56));


//TIPO 2: Função com parametro e SEM retorno;

function exibirMultiplicacao (a,b) {
    console.log (a*b);
}

exibirMultiplicacao (5,4);
exibirMultiplicacao (7,9); //Posso chamar quantas vezes quiser;

//TIPO 3: Função SEM parametro e COM retorno;
function retornaDataAtual() {
    return new Date();
}

console.log (retornaDataAtual());

//TIPO 4: Função SEM parametro e SEM retorno;
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual ();

