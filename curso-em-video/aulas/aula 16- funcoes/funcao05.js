// Função Recursiva Quando ela chama ela mesma);

// 5! = 5 x 4 x 3 x 2 x 1 = 120;
// 4 x 3 x 2 x 1 = 4!
//5! = 5 * 4! (o fatorial de um número pode ser calculado baseado no fatorial de outro)
/* n! = n * (n-1)
1! = 1 */

function fatorial(n) {
    if ( n == 1) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5));