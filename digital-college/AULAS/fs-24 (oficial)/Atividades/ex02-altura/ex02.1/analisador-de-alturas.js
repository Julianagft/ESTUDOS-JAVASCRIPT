let altura = document.getElementById('altura');
let lista = document.querySelector('#lista');
let res = document.querySelector('#res');
let valores = [];
listaLimpou = false;

function isNumero(n) {
    if (Number(n) >= 1 && Number(n <= 2)) {
        // Pra verificar se é um número válido (precisa ser >= 1 e <=100)
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
    

    if (isNumero(altura.value)) {
        //Está falando que só vai adicionar se for um número 
       // for(c = num.value; c = finalizar(); c++) {}
            
        valores.push(Number(altura.value))
        let item = document.createElement('option');
        item.text += `Altura ${altura.value}m adicionada.`;
        lista.appendChild(item);

    } else {
        alert('Número inválido!');
    }

    altura.value = '';
    altura.focus() //Isso aqui é pra que eu não precise apagar a caixa antes de digitar um outro número;
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${valores.length} alturas cadastradas;</p>
        <p>A maior altura informada foi ${Math.max(...valores)}m.</p>
        <p>A menor altura informada foi ${Math.min(...valores)}m.</p>`
    }  
}

// valores.length = Para saber o total de elementos cadastrados

// Math.max(...valores) =  Para saber qual o maior valor cadastrado. Os três pontos (...) antes de lista representam o operador de propagação (spread operator) em JavaScript. Essa sintaxe permite que você descomponha um array em seus elementos individuais, tornando-os argumentos separados para uma função.

// Math.min(...valores) = Para saber qual o menor valor da lista;



