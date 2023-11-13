// SET
// Removendo Duplicatas


const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

//Para não alterar o array original:

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);
// Os elementos de um Set não podem se repetir, por isso ele é útil em casos de duplicidade;