let num = document.getElementById('number');
let lista = document.querySelector('#lista');
let res = document.querySelector('#res');
let valores = [];
listaLimpou = false;

function isNumero(n) {
    if (Number(n) >= 1 && Number(n <= 100)) {
        // Pra verificar se é um número válido (precisa ser >= 1 e <=100)
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        // Para verificar se já está na lista (Se o número for diferente de -1 (em array se o número não estiver na lista ele retorna -1))
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (!listaLimpou) {
       lista.innerHTML = ''; //para limpar a lista antes de adicinar o número; 
       listaLimpou = true;
    } //Neste código, a variável listaLimpou é usada para controlar se a lista já foi limpa. Na primeira chamada da função adicionar, a lista é limpa, e a variável listaLimpou é marcada como true. Nas chamadas subsequentes, a lista não será limpa novamente. Isso permite que a lista mantenha os valores anteriores após a primeira chamada.
    

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        //Está falando que só vai adicionar se for um número e se não estiver na lista.
       // for(c = num.value; c = finalizar(); c++) {}
            
        valores.push(Number(num.value))
        let item = document.createElement('option');
        item.text += `Valor ${num.value} adicionado.`;
        lista.appendChild(item);

    } else {
        alert('Número inválido ou já encontrado na lista');
    }

    num.value = '';
    num.focus() //Isso aqui é pra que eu não precise apagar a caixa antes de digitar um outro número;
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let soma = 0
        for(let i = 0; i < valores.length; i++) {
            soma += valores[i]
        }
        let media = soma / valores.length;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${valores.length} números cadastrados;</p>
        <p>O maior valor informado foi ${Math.max(...valores)}  </p>
        <p>O menor valor informado foi ${Math.min(...valores)};</p>
        <p>Somando todos os valores temos ${soma};</p>
        <p>A média dos valores digitados é ${Number(media.toFixed(2))};</p>`
    }  
}

// valores.length = Para saber o total de elementos cadastrados

// Math.max(...valores) =  Para saber qual o maior valor cadastrado. Os três pontos (...) antes de lista representam o operador de propagação (spread operator) em JavaScript. Essa sintaxe permite que você descomponha um array em seus elementos individuais, tornando-os argumentos separados para uma função.

// Math.min(...valores) = Para saber qual o menor valor da lista;



