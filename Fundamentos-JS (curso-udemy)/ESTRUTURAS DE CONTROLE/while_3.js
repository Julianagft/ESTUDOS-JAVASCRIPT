//console.log (Date.now());
// Vai mostrar a quantidade de milisegundos desde o dia 01/01/1970;
// E vai mudar aa cada milisegundo 
//1666560647823
//1666560687389

const futuro = Date.now() + 2000
let quantidade = 0;
while (Date.now() < futuro) {
    quantidade++;

}
console.log ('qtdade: ' +quantidade);