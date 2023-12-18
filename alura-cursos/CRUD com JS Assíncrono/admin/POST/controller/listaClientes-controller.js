import { clienteService } from '../service/cliente-service.js'

//cria um template
const criaNovaLinha = (nome, email, id) => { 
    const linhaNovoCliente = document.createElement('tr');

    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> `

    linhaNovoCliente.innerHTML = conteudo;

   // Para removermos o elemento html do cliente que queremos excluir precisamos identificar cada um através do 'id'. Pra isso preciso adicionar um id na <tr> através do dataset;
    linhaNovoCliente.dataset.id = id;

    return linhaNovoCliente;
}

// Percorre o DOM para buscar o corpo da tabela 
const tabela = document.querySelector('[data-tabela]');

// Excluindo um cliente.

tabela.addEventListener('click', (evento) => {
    let botaoDeletar = evento.target.className === "botao-simples botao-simples--excluir";

    if (botaoDeletar) {
        // Para deletar a linha E o cliente preciso encontrar o elemento pai mais próximo da minha <td>, no caso a <tr> que criamos.
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id

        clienteService.removeCliente(id)
        // Aqui removemos o elemento da API, mas também precisamos remover o elelemnto HTML. Isso tem que ser feito dentro do template.
        .then(() => {
            linhaCliente.remove()
        })
       
    }
})



// Parte responsável por gerar a visulaização.
clienteService.listaClientes()
.then( (data) => {
    data.forEach((elemento) => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
    });
})
