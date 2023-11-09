function exibir() {
    let num = document.querySelector('#txtnumber');
    let tab = document.querySelector('#tab');
    let operation = document.querySelector('#operation').value;

    if(num.value.length == 0) {
        window.alert('[ERRO] Por favor digite um número!');
    } else {
        let n = Number(num.value);
        tab.innerHTML = ''; // Limpa a tabela antes de exibir a nova tabuada


        for (let cont = 1; cont <= 10; cont++){
            let newRow = tab.insertRow(); //Adiciona uma nova linha a tabela;
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            
            if (operation === 'soma') {
                cell1.innerHTML = `${n} + ${cont} = `;
                cell2.innerHTML = `${n + cont}`;
            } else if (operation === 'subtraçao') {
                cell1.innerHTML = `${n} - ${cont} = `;
                cell2.innerHTML = `${n - cont}`;
            }else if (operation === 'multiplicacao') {
                cell1.innerHTML = `${n} x ${cont} = `
                cell2.innerHTML = `${n * cont}`;
            } else {
                cell1.innerHTML = `${n} / ${cont} = `
                cell2.innerHTML = `${(n / cont).toFixed(2)}`;
            }
        }
    } 

    tab.style.textAlign = 'center';
}
       