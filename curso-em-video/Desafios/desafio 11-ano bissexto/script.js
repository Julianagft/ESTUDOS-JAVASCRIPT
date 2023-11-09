/* O calendário gregoriano segue algumas regras para definir se um ano é bissexto ou não:

1. Um ano é bissexto se for divisível por 4.
2. Anos que são divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.
*/

function verificador() {
    let ano = Number(prompt('Qual é o anno que você quer verificar?'));
    let resposta = document.querySelector('#resposta')

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        resposta.innerHTML = `<p>O ano de ${ano} <mark class="mark__2">É BISSEXTO</mark> &#x2705 </p>`
    } else {
        resposta.innerHTML = `<p>O ano de ${ano} <mark class="mark__1">NÃO É BISSEXTO</mark> &#x274C </p>`
    }
}