// REQUISIÇÃO AJAX

// Vamos usar o  objeto xmlhttprequest

const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
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

    return linhaNovoCliente;
}
 

const http = new XMLHttpRequest()

// O primeiro parâmetro é o que eu quero falar com o servidor (o que vou pedir a ele);
// O segundo é o indereço para onde eu irei enviar a minha requisição;
http.open('GET', 'http://localhost:3000/profile');

// Enviamos a nossa requisição;
http.send()

http.onload = () => {
    const data = http.response
    console.log(data);
}