// callbackFn (ou Callback Function);


const bancoDeDados = [
    {
        nome: 'Maria',
        sobrenome: 'Rodrigues',
        idade: 28
    },
    {
        nome: 'Samuel',
        sobrenome: 'Rodrigues',
        idade: 24
    },
    {
        nome: 'Rochele',
        sobrenome: 'Rodrigues',
        idade: 29
    }
]

const resultado = bancoDeDados.map(function (objeto){
    return `${objeto.nome} ${objeto.sobrenome}, idade: ${objeto.idade}`
})

console.log(resultado);

// O primeiro parametro sempre sera o objeto e o segundo sempre sera correspondente ao index da lista;

