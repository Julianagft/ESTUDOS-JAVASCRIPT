const usuario = prompt('Olá, qual o seu nome?');
const resp = document.getElementById('resp');

function boasVindas(pessoa) {
    return pessoa
}

resp.innerHTML = `Olá ${boasVindas(usuario)}, seja bem vindo(a)!`

