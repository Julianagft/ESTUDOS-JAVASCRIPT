//Para colocarmos um valor padrão na SOMA podemos usar o valor: 0, pois é um número neutro;

function somar (a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
}

//O Java Script tem a flexibilidade de passar mais parametros do que oq foi pedido;
//Porém ele irá simplesmente ignorar esses parametros e considerar apenas os que foram declarados na função;
console.log (somar (1, 2, 3, 4, 5, 6)); //ignorou o '5 e 6' por isso o resutado continuou sendo '10';
console.log (somar (1, 2, 3));
console.log (somar (1, 2));
console.log (somar (1));
console.log (somar ()); 
console.log ('Fim!');