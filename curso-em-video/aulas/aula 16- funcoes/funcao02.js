function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2,-6))

//Se por algum motivo eu não definir um dos parâmetros o js irá considerar como 'undefined'. O resultado do console seria NaN.

function soma2 (n1=0, n2=0) {
    return n1+ n2
}

console.log(soma2(3))

//Nesse caso como já havia definido previmanete um valor para os parêmetros eu posso deixar algum deles sem declaração. Ele irá reconhecer a operação nomrmalmente. Nesse caso ele retornara '3' pois 3 + 0 = 3.