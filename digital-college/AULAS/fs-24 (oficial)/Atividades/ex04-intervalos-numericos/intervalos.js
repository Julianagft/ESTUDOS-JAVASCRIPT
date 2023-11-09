
let num = document.getElementById('num');
let lista = document.querySelector('#lista');
let res = document.querySelector('#res');
let valores = [];
listaLimpou = false;

num.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adicionar();
    }
}); //Para utilizar o enter para adicionar os valores na lista. 


function adicionar() {

    if (!listaLimpou) {
        lista.innerHTML = '';
        listaLimpou = true;
    }

    const numValue = Number(num.value);

    if (isNaN(numValue) || num.value.trim() === '') {
        alert("Digite um valor válido.");
        return;
    }

    if (Number(num.value) < 0) {
        return finalizar();
     } else if (Number(num.value) > 100) {
         return alert("Valor maior que 100. Digite um valor entre 0 e 100.");
     }

    
    valores.push(Number(num.value))
    let item = document.createElement('option');
    item.text += `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    
    num.value = '';
    num.focus() //Isso aqui é pra que eu não precise apagar a caixa antes de digitar um outro número;

}


function finalizar() {

    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {

        let intervalo1 = 0;
        let intervalo2 = 0;
        let intervalo3 = 0;
        let intervalo4 = 0;

        for (let i = 0; i < valores.length; i++) {
            if (valores [i] >= 0 && valores [i] <= 25) {
                intervalo1++;
            } else if(valores[i] >= 26 && valores[i] <= 50) {
                intervalo2++;
            } else if (valores[i] >= 51 && valores[i] <= 75) {
                intervalo3++;
            } else if (valores[i] >= 76 && valores[i] <= 100) {
                intervalo4++;
            }
    }

    res.innerHTML += `<p style="color: whitesmoke">Ao todo temos ${valores.length} valores cadastrados:</p>
                            <p>Temos ${intervalo1} números no intervalo de [0-25];</p>
                            <p>Temos ${intervalo2} números no intervalo de [26-50];</p>
                            <p>Temos ${intervalo3} números no intervalo de [51-75];</p>
                            <p>Temos ${intervalo4} números no intervalo de [76-100];</p>`;

  }
        
}  

function limpar() {
    res.innerHTML = ``;
}





