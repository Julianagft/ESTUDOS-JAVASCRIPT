function contar() {
     
    let inicio = document.querySelector('#txtinicio');
    let fim = document.querySelector('#txtfim');
    let passo = document.querySelector('#txtpasso');
    let res = document.querySelector('#res');

    res.innerHTML = 'Contando: <br>'
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Não é possível contar!'

    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p<=0){
            window.alert('Passo inválido! Considerando PASSO: 1')
            p = 1;
        }
        if (i < f) {
            //contagem crescente...
            let cont = 1;
            while (cont < f) {
            cont = cont + p;
            res.innerHTML += `${cont} \u{1f449}` //formato de unicode de JS
        }    
        }else {
        // contagem regressiva...
            for (cont = i; cont >= f; cont -= p){
                res.innerHTML += `${cont} \u{1f449}`
            }
        }
        res.innerHTML += '\u{1F6A9}' 
    }  
}