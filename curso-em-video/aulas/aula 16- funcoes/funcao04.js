// Calcular o fatorial de um número usando laços de repetição; 

// 5! = 5 x 4 x 3 x 2 x 1 = 120;

function fatorial(n) {
    let fat = 1
    for (let cont = n; cont > 1; cont--) { //enquanto o contador for maior que 1 o contador perde 1;
        fat *= cont //(fat = fat * cont)
    }

    return fat
}

console.log(fatorial(5));