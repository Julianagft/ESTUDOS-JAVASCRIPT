import { clienteService } from '../service/cliente-service.js'

//cria um template
const criaNovaLinha = (nome, email, id) => { 
    const linhaNovoCliente = document.createElement('tr');

    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul> 
        </td> `
        // usei uma query string. Assim o id q identifica cada um dos clientes fica no final da url.

    linhaNovoCliente.innerHTML = conteudo;

   // Para removermos o elemento html do cliente que queremos excluir precisamos identificar cada um através do 'id'. Pra isso preciso adicionar um id na <tr> através do dataset;
    linhaNovoCliente.dataset.id = id;

    return linhaNovoCliente;
}

// Percorre o DOM para buscar o corpo da tabela 
const tabela = document.querySelector('[data-tabela]');

// Excluindo um cliente.

tabela.addEventListener('click', async (evento) => {
    let botaoDeletar = evento.target.className === "botao-simples botao-simples--excluir";

    if (botaoDeletar) {
        try {
            const linhaCliente = evento.target.closest('[data-id]');
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            // Com o await não precisamos mais do .then()
            linhaCliente.remove()
        }
        catch(erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

// Parte responsável por gerar a visulaização (renderiza dados na tela).
const render = async () => {
   try {
        const listaClientes = await clienteService.listaClientes()

        listaClientes.forEach((elemento) => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
        }) 
   }
   catch(erro) {
    console.log(erro)
    window.location.href = '../telas/erro.html'
   }
}
render()

