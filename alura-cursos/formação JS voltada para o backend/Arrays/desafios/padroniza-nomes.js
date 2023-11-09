// MAP ()

// Padronizando os nomes:

// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.

// ana Julia, Caio vinicius, BIA silva;

const nomes = [ 'ana Julia', 'Caio vinicius', 'BIA silva']

/* const nomesPadronizados = nomes.map((n) => {
    return n.toUpperCase();
}); */

// Forma mais sucinta de escrever Arrow Functions:

const nomesPadronizados = nomes.map((n) => n.toUpperCase());

console.log(nomesPadronizados);