// Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta  a duração para horas e minutos.

let titulo = document.querySelector('#titulo');

let resp = document.querySelector('#resposta');


function tempoFilme () {
    let filme = document.querySelector('#filme').value;
    let duracao = document.querySelector('#duracao').value;
    let hora = parseInt(duracao/60);
    let min = duracao % 60; 

    
    titulo.textContent = `${filme}`;
    resp.textContent += `${hora} hora(s) e ${min} minutos(s)`;

}

function limpar(){
    
    titulo.textContent = ``;
    resp.textContent = ``;
}
 

let mostrar = document.getElementById('converter');
mostrar.addEventListener('click', tempoFilme);  

let limpa = document.getElementById('limpa');
limpa.addEventListener('click', limpar);
