// FUNÇÕES CALLBACKS

const nomes = ['Evaldo', 'Mari', 'Ju'];

nomes.forEach(function (n) {
    console.log(n);
});

// Mesmo código usando Arrow Function:

nomes.forEach((n) => {
    console.log(n);
});

// Criando a função de forma externa e passando sua referência como parâmetro do método forEatch: 

function imprimeNomme (n) {
    console.log(n)
};

nomes.forEach(imprimeNomme); //Aqui estou apenas passando a referência da função. Não utilizo os parênteses pois não funcionaria;


// Três formas diferentes que executam o mesmo código usando funções callback;

