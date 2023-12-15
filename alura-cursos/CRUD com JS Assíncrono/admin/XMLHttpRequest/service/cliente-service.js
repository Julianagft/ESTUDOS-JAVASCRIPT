// REQUISIÇÃO AJAX USANDO XMLHTTPREQUEST

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

// Isso tudo acontecerá depois que a promisse for cumprida. A promisse estta dentro da função listaClientes, então será executado depois que chamarmos essa função ao fim do código. 



// USANDO O OBJETO xmlhttprequest
        // PASSO A PASSO:

// OBS: Antes de mais nada verificar se o JSON-SERVER está inicializado;

// OBS2: Primeiramente crio uma função para organizar o código. E dentro dessa função crio uma promisse. 
const listaClientes = () => {

    //Inicializa a promisse 
    const promise = new Promise((resolve, reject) => {
        // O resolve e o reject vão lidar com o sucesso ou o erro da nossa chamada


        // 1. Para fazer a comunicação entre nossa aplicação e a API usammos o objeto XMLHttpRequest;
        // 2. Inicializar esse objeto

        const http = new XMLHttpRequest() 

        // 3. Abrir a comunicação entre minha aplicação e a API através do MÉTODO OPEN();

        http.open('GET', 'http://localhost:3000/profile');
        // O primeiro parâmetro é o que eu quero falar com o servidor (o que vou pedir a ele);
        // O segundo é o endereço para onde eu irei enviar a minha requisição;
        // MÉTODO GET (Para pegar os dados que estão no servidor)

        // 4. Indicamos ao JavaScript o que queremos que aconteça depois que fizermos a requisição através do método ONLOAD (AO CARREGAR A PÁGINA);

        // Dentro da função call-back do onload, vou passar uma verificação para saber se deu tudo ok ou não com a nossa chamada. Se (http.status >= 400), ou seja, 400 já é a bad request, a requisição que não deu certo, acima disso também tem erros, são erros relacionados a cliente servidor.

        http.onload = () => {
            if(http.status >= 400) {
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }

        // 5. Enviamos a nossa requisição através do médodo SEND();
        http.send()
    });
    // console.log(promise) só pra ver o que tem dentro da promisse

    return promise
}


// Simulamos uma API para teste (mockar dados). Vai estar no arquivo package.json, onde estará listado como dependencia do projeto o json-server; 

// Abro o terminal e faço um npm install para baixar as dependencias do projeto;
// Para rodar o json-server faço o comando JSON-server --watch;


listaClientes()
.then( (data) => {
    data.forEach((elemento) => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
        //Assim conseguimos pegar cada dado referente ao cliente.
        // Assim tbm colocamos o elemento filho dentro do elemento pai (criando as tds dentro do tbody);
    });
})

// O them é utilizado para lidar com o "sucesso" de uma promise;