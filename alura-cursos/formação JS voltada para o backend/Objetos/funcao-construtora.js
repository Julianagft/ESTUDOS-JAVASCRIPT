// FUNÇÃO CONSTRUTORA

function Carro (marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
};

const carro1 = new Carro("Toyota", "Corola", 2020);
const carro2 = new Carro("Fiat", "Mobi", 2023);

console.log(carro1);
console.log(carro2);

