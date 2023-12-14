// REQUISIÇÃO AJAX

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

// Usando o data attributes como alvo ao percorrer a árvore DOM. 
// Criamos uma const tabela 
 
const tabela = document.querySelector('[data-tabela]');

// Agora temos o elemento pai (tbody) e o elemento filho que é a linha que acabamos de criar;
// Para colocar ela dentro desse elemento pai utilizamos o appendChild criando o tabela.appendChild(criaNovaLinha(nome,email));

// Os dados vão vir da const data. Então colocaremos essa parte do codigo dentro do metodo onload onde ela foi declarada e usaremos o forEacth() para percorrer cada um referente a cada um dos clientes em db.json;



// USANDO O OBJETO xmlhttprequest
// PASSO A PASSO:

// OBS: Antes de mais nada verificar se o JSON-SERVER está inicializado;

// 1. Para fazer a comunicação entre nossa aplicação e a API usammos o objeto XMLHttpRequest;
// 2. Inicializar esse objeto

const http = new XMLHttpRequest() 

// 3. Abrir a comunicação entre minha aplicação e a API através do MÉTODO OPEN();

http.open('GET', 'http://localhost:3000/profile');
// O primeiro parâmetro é o que eu quero falar com o servidor (o que vou pedir a ele);
// O segundo é o endereço para onde eu irei enviar a minha requisição;
// MÉTODO GET (Para pegar os dados que estão no servidor)

// 4. Enviamos a nossa requisição através do médodo SEND();
http.send()

// 5. Indicamos ao JavaScript o que queremos qque aconteça depois que fizermos a requisição através do método ONLOAD (AO CARREGAR A PÁGINA);

// Vou usar o http.response, que é o que o navegador me devolveu, e vou imprimir no console do começo. Vou guardá-lo na const data, para uso futuro;

http.onload = () => {
    const data = JSON.parse(http.response) //Está retornando no console como texto, pois o http é um elemento de texto e não reconhece   como js válido. Por isso precisamos transformar essa resposta em um objeto JS com o JSON.parse().

    data.forEach((elemento) => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
        //Assim conseguimos pegar cada dado referente ao cliente.
        // Assim tbm colocamos o elemento filho dentro do elemento pai (criando as tds dentro do tbody);
    });

    const http2 = new XMLHttpRequest()
    http2.open('GET', 'http://localhost:3000/profile/semanaPassada')

    http2.onload = () => {
        ..
    }

    http2.send()
}

// Simulamos uma API para teste (mockar dados). Vai estar no arquivo package.json, onde estará listado como dependencia do projeto o json-server; 

// Abro o terminal e faço um npm install para baixar as dependencias do projeto;
// Para rodar o json-server faço o comando JSON-server --watch;