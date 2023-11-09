const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function () {
        return this.preco * (1 - this.desconto); //THIS é a forma que eu tenho para referenciar os atributos que pertencem ao objeto;
    }
};

///OBS: Eu não uso o THIS fora do objeto, mas quando estou dentro é a forma que eu tenho para referenciar seus atributos;

console.log(produto.nome);
console.log (produto.precoComDesconto());


