// Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta  a duração para horas e minutos.

let titulo = document.querySelector('#titulo');

let resp1 = document.querySelector('#resp1');
let resp2 = document.querySelector('#resp2');


function verificar () {
    let imovel = document.querySelector('#imovel').value;
    let preco = document.querySelector('#preco').value;
    let entrada = preco * 0.3;
    let parcelas = ((preco - entrada) / 60); 

    
    titulo.textContent = `Imóvel: ${imovel}`;
    resp1.textContent += `Entrada: ${entrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    resp2.textContent += `+ 60 parcelas de R$ ${parcelas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    titulo.style.fontWeight = 'bold';
}

function limpar(){
    
    titulo.textContent = ``;
    resp1.textContent = ``;
    resp2.textContent = ``;
}
 

let mostrar = document.getElementById('converter');
mostrar.addEventListener('click', verificar);  

let limpa = document.getElementById('limpa');
limpa.addEventListener('click', limpar);
