function somar (a, b, c, d) {
    return a + b + c + d;
}

console.log (somar (1, 2, 3, 4));
console.log (somar (1, 2, 3)); //Gerou um 'Not a Number' (NaN);
/* Isso contece pois, no momento que eu não passo a quantidade de parametros que a função pede,
automaticamente esse valor vai assumir o 'UNDEFINED';/*

/* Embora gere um 'UNDEFINED" não gera erro, pois se trata de uma linguagem mais flexível,
o que quer dizer que posso continuar a rodar o código sem maiores problemas. Exemplo: */

console.log ('Fim!');

//Código rodou sem problemas mesmo com o 'NaN';

