// CONEXÃO COM A API;


 const listaClientes = () => {
    return fetch('http://localhost:3000/profile')
    .then((resposta) => {
        return resposta.json() 
    }); //converte a resposta para json.
}

// USANDO O MÉTODO 'POST' PARA CRIAR UM CLIENTE.

const criaCliente = (nome, email) => {
    //Passamos outras informações pois por padrão o Fetch faz um GET. Dessa forma como quer POSTAR algo vou passar o método POST dentro do Fetch.
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        //transforma em texto;
        body: JSON.stringify({
            //passo os parâmetros da minha função.
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        return resposta.json()
    })
} //a resposta é um parâmetro que eu criei para representar a resposta recebida da requisição POST feita à API.

// USANDO O MÉTODO 'DELETE' PARA REMOVER UM CLIENTE.

const removeCliente = (id) => {
    // O db.json cria um id para cada cliente, dessa forma podemos usar esse id para identificar o cliente que desejamos, evitando a exclusão de todos.
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    })
    // Ele vai direto no inderço, identifica o id do cliente e o remove do banco de dados.

}


export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente
}









