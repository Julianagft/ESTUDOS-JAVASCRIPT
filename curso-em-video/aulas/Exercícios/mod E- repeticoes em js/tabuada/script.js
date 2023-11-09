function exibir() {
    let num = document.querySelector('#txtnumber');
    let tab = document.querySelector('#seltab');
    
    if(num.value.length == 0) {
        window.alert('[ERRO] Por favor digite um número!');
    } else {
        let n = Number(num.value);
        let cont = 1;
        tab.innerHTML = '' //para evitar o acumulo de codigo ele limpa antes de carregar a nova taboada;
        while (cont <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${cont} = ${n * cont}`
            tab.appendChild(item); //para adicionar o item a tag <option> 

            cont ++ //importante que ele fique por ultimo pois se ele ficar primeiro ja pula para o n * 2 (ordem de execução);
            
        } 
    }    
}