// Desenvolva um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.

function calcularSoma() {
    let soma = 0
    for (let i = 1; i <= 500; i++) {
        
        if (i % 3 === 0) {
            soma += i
        }
    }
    return soma;
}

function verificador() {
    resp = document.querySelector('#resposta');

    resp.innerHTML = `<p>O resultado da soma dos multiplos de 3 é igual a ${calcularSoma()}</p>` 
   
}

