// Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta  a duração para horas e minutos.

let resp = document.getElementById('resp');


function verificar () {
    let valorKg = document.querySelector('#valorKilo').value;
    let consumo = document.querySelector('#consumo').value;
    let pagamento = (consumo * valorKg) / 1000;

    
    resp.textContent += `Valor a ser pago: R$ ${pagamento.toFixed(2)}`;
    resp.style.fontWeight = 'bold';
}

function limpar(){
    resp.textContent = ``;
}
 

let mostrar = document.getElementById('calcula');
mostrar.addEventListener('click', verificar);  

let limpa = document.getElementById('limpa');
limpa.addEventListener('click', limpar);
