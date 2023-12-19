import { clienteService } from '../service/cliente-service.js'

const pegaURL = new  URL(window.location);
// Cria um novo objeto URL em JavaScript usando a localização (URL) atual do navegador, que é representada pelo objeto window.location.

const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome');
const inputEmail = document.querySelector('[data-email');

clienteService.detalhaCliente(id)
.then((dados)=> {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
});

// Vai procurar onde está o formulário na página;
const formulario = document.querySelector('[data-form');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {
        window.location.href = "../telas/edicao_concluida.html"
    })
})