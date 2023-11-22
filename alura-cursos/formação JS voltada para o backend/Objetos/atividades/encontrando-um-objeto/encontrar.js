const clientes = require("./cliente.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));

}

const encontraNome = encontrar(clientes, "nome", "Juliet");

const encontraTelefone = encontrar(clientes, "telefone","9466883489")

console.log(encontraNome);
console.log(encontraTelefone);



// Dissecando a linha 4:
// return lista.find((item) => item[chave].includes(valor));


// lista.find(...): Isso indica que estamos usando o método find na array chamada lista. O método find percorre cada elemento da array e retorna o primeiro elemento que satisfaz a condição especificada em uma função.

// (item) => ...: Esta parte é uma função de callback. Ela é executada para cada elemento na array lista. O parâmetro item representa cada elemento da array durante a iteração.

// item[chave]: Aqui, item[chave] está acessando a propriedade do objeto item cujo nome é fornecido pela variável chave. Isso significa que a função busca por um objeto na array cuja propriedade indicada por chave seja relevante.

// .includes(valor): Isso verifica se o valor fornecido está incluído na propriedade do objeto (item[chave]). O método includes retorna true se encontrar o valor e false caso contrário.

// return: A linha completa retorna o primeiro elemento da array lista para o qual a propriedade indicada por chave inclui o valor especificado.

// Em resumo, esta linha de código está procurando o primeiro objeto em uma array onde a propriedade especificada (chave) inclui o valor fornecido (valor).





