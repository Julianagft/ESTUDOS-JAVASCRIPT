
function mostrarHora() {
    let resp = document.getElementById('resp');

    let data = new Date()

    // let hora = data.getHours();
    // let minutos = data.getMinutes();

    // minutos = minutos < 10 ? `0${minutos}` : minutos 

    // let horaAtual = `${hora}: ${minutos}`

    resp.innerHTML = `<p> Hoje é ${data.toLocaleString("pt-BR")}, horário de Brasília!`

}

