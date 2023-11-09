//Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
//Exemplo:
// receberNomeDoMes(1) // retornará "janeiro"
// receberNomeDoMes(4) // retornará "abril"

function retornaMes (numero) {
    switch (numero){
        case 1: return 'Janeiro!';
        case 2: return 'Fevereiro!';
        case 3: return 'Março!';
        case 4: return 'Abril!';
        case 5: return 'Maio!';
        case 6: return 'Junho!';
        case 7: return 'Julho!';
        case 8: return 'Agosto!';
        case 9: return 'Setembro!';
        case 10: return 'Outubro!';
        case 11: return 'Novembro!';
        case 12: return 'Dezembro!';
}
        
    }
    

console.log (`O mês é ${retornaMes(5)}` );