// CONEXÃO COM A API;


 const listaClientes = () => {
    return fetch('http://localhost:3000/profile')
    .then((resposta) => {
        if(resposta.ok) {
            return resposta.json()     
        }
        throw new Error('Não foi possível listar os clientes.')
        
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
    .then((resposta) => {
        if(resposta.ok) {
            return resposta.json()     
        }
        throw new Error('Não foi possível criar um cliente.')
    });
} //a resposta é um parâmetro que eu criei para representar a resposta recebida da requisição POST feita à API.

// USANDO O MÉTODO 'DELETE' PARA REMOVER UM CLIENTE.

const removeCliente = (id) => {
    // O db.json cria um id para cada cliente, dessa forma podemos usar esse id para identificar o cliente que desejamos, evitando a exclusão de todos.
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }).then((resposta) => {
        if(!resposta.ok) {
            throw new Error('Não foi possível remover um cliente.') 
        }
    })
    // Ele vai direto no inderço, identifica o id do cliente e o remove do banco de dados.

}

// EDITANDO UM CLIENTE
// Preciso de uma função para editar o cliente e outra para enviar a atualização para o servidor:

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then((resposta) => {
        if(resposta.ok) {
            return resposta.json()     
        }
        throw new Error('Não foi possível detalhar um cliente.')
    });
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome:nome,
            email:email
        })
    })
    .then((resposta) => {
        if(resposta.ok) {
            return resposta.json()     
        }
        throw new Error('Não foi possível atualizar um cliente.')
    });
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}










