// Desenvolva um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.


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
       lista.innerHTML = ''; //para limpar a lista antes de adicinar o número; 
       listaLimpou = true;
    } //Neste código, a variável listaLimpou é usada para controlar se a lista já foi limpa. Na primeira chamada da função adicionar, a lista é limpa, e a variável listaLimpou é marcada como true. Nas chamadas subsequentes, a lista não será limpa novamente. Isso permite que a lista mantenha os valores anteriores após a primeira chamada.
    
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

       
        let soma = 0;
        let positivos = 0;
        let negativos = 0;

        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
            if (valores[i] > 0) {
                positivos++;
            } else if (valores[i] < 0) {
                negativos++;
            } 
        }

        const media = soma / valores.length;
        const percentualPositivo = (positivos / valores.length) * 100;
        const percentualNegativo = (negativos / valores.length) * 100;


        
        res.innerHTML += `<p style="color: #2C4373">Ao todo temos ${valores.length} valores cadastrados:</p>
        <p>A média aritmética dos valores é ${media.toFixed(2)}.</p>
        <p>O maior valor informado foi ${Math.max(...valores)}.</p>
        <p>O menor valor informado foi ${Math.min(...valores)}.</p>
        <p>Foram informados ${positivos} valores positivos e ${negativos} negativos.</p>
        <p>O percentual de valores positivos foi ${percentualPositivo.toFixed(2)}% e de valores negativos foi ${percentualNegativo.toFixed(2)}%</p>`
        
    }  
}

// valores.length = Para saber o total de elementos cadastrados

// Math.max(...valores) =  Para saber qual o maior valor cadastrado. Os três pontos (...) antes de lista representam o operador de propagação (spread operator) em JavaScript. Essa sintaxe permite que você descomponha um array em seus elementos individuais, tornando-os argumentos separados para uma função.

// Math.min(...valores) = Para saber qual o menor valor da lista;



