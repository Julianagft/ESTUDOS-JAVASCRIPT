
function verificador () {
    let precoAntigo = Number(prompt('Qual era o preço anterior do produto?'));
    let precoAtual = Number(prompt('Qual o preço atual do produto?'));
    let resp = document.querySelector('#resp');
    let diferenca = precoAtual - precoAntigo;
    let percent = ((diferenca/precoAntigo)*100)

    if (precoAntigo <= 0 || precoAtual <= 0){
        alert('Por favor digite um valor válido!')
    } else if (precoAntigo == precoAtual) {
        `<p>O produto não sofreu alteração de preço.</p>`
    } else if (precoAntigo < precoAtual) {
        resp.innerHTML = `<p>O produto custava R$ ${precoAntigo} e agora custa R$ ${precoAtual}.</p>
        <p>Hoje o produto está mais caro.</p>
        <p>O preço subiu R$ ${diferenca} em relação ao preço anterior.</p>
        <p>Uma variação de ${percent.toFixed(2)}% a mais.</p>`
    } else {
        resp.innerHTML = `<p>O produto custava R$ ${precoAntigo} e agora custa R$ ${precoAtual}.</p>
        <p>Hoje o produto está mais barato.</p>
        <p>O preço caiu R$ ${Math.abs(diferenca)} em relação ao preço anterior.</p>
        <p>Uma variação de ${Math.abs(percent.toFixed(2))}% a menos.</p>`
    }
   
}

//Math.abs() : transforma um valor negativo em positivo;
//Math.round() : arredonda para o número inteiro mais próximo;