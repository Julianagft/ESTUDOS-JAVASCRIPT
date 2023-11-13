//Para verificar se um número é primo em JavaScript, você pode criar uma função que itera de 2 até a raiz quadrada do número e verifica se o número é divisível por algum dos valores nesse intervalo. Se não for divisível por nenhum desses valores, então o número é primo.

const resp = document.querySelector('#resp');
const valor = Number(prompt('Digite um número e descubra se ele é primo ou não'));


function numeroPrimo (n) {
    if (n <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // Se for divisível não é primo
            return resp.textContent = `O número ${n} não é primo!`
        }
    }

    return resp.textContent = `O número ${n} é primo!` // Se não foi divisível por nenhum valor é primo;
}

numeroPrimo(valor);





