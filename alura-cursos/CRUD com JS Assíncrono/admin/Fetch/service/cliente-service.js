// REQUISIÇÃO AJAX USANDO FETCH

// TEMPLATE: 
// Crio um template para passar os dados da API para o HTML

const criaNovaLinha = (nome, email) => { //nome e e-mail são os dados que vamos pegar da API;
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

    return linhaNovoCliente;
}
// Aqui temos o campo que vai pegar o nome, o campo que vai pegar o e-mail, e depois vamos ter também um campo que está dentro de uma lista, que vai ter um link que quando clicarmos vai levar-nos para a página de edição e um botão que vai excluir os dados dos clientes. 

// PERCORRENDO A ARVORE DOM COM DATA ATTRIBUTES
 
const tabela = document.querySelector('[data-tabela]');

// Agora temos o elemento pai (tbody) e o elemento filho que é a linha que acabamos de criar;

// Para colocar ela dentro desse elemento pai utilizamos o appendChild criando o tabela.appendChild(criaNovaLinha(nome,email));

// Isso será feito na chamada de listaClientes() dentro do then.

// USANDO O FETCH

// Por padrão a Fetch já faz o catch e já me devolve uma promisse. Por isso basta retornar a Fetch.
// Como ele me devolve uma promise, eu já trabalho com essa resposta usando o .tehn

const listaClientes = () => {
    return fetch('http://localhost:3000/profile')
    .then((resposta) => {
        return resposta.json() // o .json() para que resposta vire um objeto válido.
    })
   
}


listaClientes()
.then( (data) => {
    data.forEach((elemento) => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
        //Assim conseguimos pegar cada dado referente ao cliente.
        // Assim tbm colocamos o elemento filho dentro do elemento pai (criando as tds dentro do tbody);
    });
})







