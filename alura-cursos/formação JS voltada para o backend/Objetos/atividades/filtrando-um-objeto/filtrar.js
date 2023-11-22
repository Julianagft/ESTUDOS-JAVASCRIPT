const clientes = require("./cliente.json");

//Filtra apenas os clientes que NÃO possuírem um complemento no endereço.
function filtrarApartamentoSemComplemento(lista) {
    return lista.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    })
}


const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);