// CADASTRO DE CLIENTES 

import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]');

//OBS: Nós poderiamos usar o document.queryselector para pegar os elementos do form como se faz geralmente, porém quando estamos lidando com eventos, o navegador disponibiliza um objeto para nós para termos mais informações sobre aquele evento.
//  Posso passar esse objeto como parâmetro dessa função e posso utilizar ele para fazer a busca no lugar do document. Ao invés de procurar no document inteiro, procuro exatamente onde está acontecendo o evento. Posso falar que é evento.target.querySelector(‘[data-nome]’), vou copiar e trocar para data-email.

// OBS2: Devemos lembrar que o comportamento padrão de um formulário é sempre enviar as informações, mas o que queremos fazer mas o que queremos fazer aqui é que antes que ele envie a informação quero buscar os nomes e fazer o clienteService. Para prevenir o comportamento padrão de envio do formulário vou fazer um evento.preventDefault, assim evita que ele envie sem checar o que tem dentro.

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;

    // envio esses dados para o cliente service, que é a função que criamos para criar clientes;
    clienteService.criaCliente(nome, email)
    // Depois que o cliente for cadastrado eu irei redirecionar a pessoa para uma outra página.
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
    .catch((error) => {
        console.error('Erro durante a requisição:', error);
     });
})

// OBS: Não irá funcionar se não lembrarmos de importar o cliente service 