// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

function verificador() {
    let altura = 0;
    let maiorAltura = Number.MIN_VALUE;
    let menorAltura = Number.MAX_VALUE;

    let resp = document.getElementById('resposta')
    for (let i = 1; i <= 5; i++) {
      altura = Number(prompt('Digite a sua altura usando "." para separar!'));
      if (altura > maiorAltura) {
        maiorAltura = altura;
      }

      if (altura < menorAltura) {
        menorAltura = altura;
      }
    }
    
    resp.innerHTML = `<p>O maior valor é ${maiorAltura} e o menor valor é ${menorAltura}.</p>`;
}

// concertar esse código para realmente aplicar alturas; 
// A maior altura registrada no mundo é 2.51.

