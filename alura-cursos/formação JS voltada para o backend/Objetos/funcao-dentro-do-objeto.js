// FUNÇÃO DENTRO DO OBJETO

//Vou criar uma função dentro do objeto que verifica se o cliente tem saldo suficiente na conta para efetuar a compra

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone:["1183838765", "11987675432"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        //'this' é uma palavra reservada que representa o objeto atual em que estamos trabalhando.
        if (valor > this.saldo){
            console.log(`Saldo Insuficiente!`)
        } else {
            const novoSaldo = this.saldo -= valor; // caso o saldo seja suficiente eu deduso do valor da compra (novo saldo é igual saldo atual - valor da compra);
            console.log(`Pagamento realizado. Novo saldo: R$ ${novoSaldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`); 
        }
    },
};

cliente.efetuaPagamento(150);