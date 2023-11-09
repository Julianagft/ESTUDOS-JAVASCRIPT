// Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

function verificador() {
    let impar = [];
    for (let i = 1; i <= 100; i++) {
        
        if (i % 2 !== 0) {
            impar.push(i);
        }
    }
    const resp = document.querySelector('#resposta');
    let maior = Math.max(...impar);
    let menor = Math.min(...impar);

    resp.innerHTML = `<p><strong>Os números ímpares entre 1 e 100 são:</strong> ${impar.join(', ')}.</p>
                      <p>Entre esses números o menor é <mark>0${menor}</mark> é o maior é <mark>${maior}</mark>!</p>` 
   
}

