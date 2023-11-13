
function calcularDesconto (valor, percent) {
    percent = percent/100;

    return valor - (valor * percent);
}

function verificar () {
    let resp = document.getElementById('resp');
    let produto = prompt('Diga qual produto você deseja comprar');
    let preco = Number(prompt('QUal o valor do produto?'));
    let desconto = Number(prompt('Qual o valor do desconto?'));

    let valorFinal= calcularDesconto(preco, desconto);
    
    resp.innerHTML =`<p>O produto ${produto} custava R$ ${preco}, sofreu um desconto de ${desconto}%.</p>
                    <p><strong>Valor Final:</strong> <mark>R$ ${valorFinal}</mark></p>`
    
    
}