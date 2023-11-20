const data = document.querySelector('#data');
const resp = document.querySelector('#resp');

data.addEventListener('keydown',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        converter();
    }
});

function converter() {
    const dataNascimento = new Date(data.value);
    const hoje = new Date();
    const difAnos = hoje.getFullYear() - dataNascimento.getFullYear();

    if (hoje.getMonth() < dataNascimento.getMonth() || hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate < dataNascimento.getDate()) {
        resp.innerHTML = `<p>A idade é ${difAnos - 1} anos.</p>`;
    } else {
        resp.innerHTML = `<p>A idade é ${difAnos} anos.</p>`;
    }
    
    data.value = '';
    data.focus()
}   

