const dados = require("./cliente.json"); // Forma que usamos para ler o arquivo json

console.log(dados); // Qualquer alteração que eu faça no arquivo json afetará o arquivo linkado. 
console.log(typeof dados);

// TRANSFORMANDO UM OBJETO EM STRING COM JSON (STRINGFICAÇÃO):

const clientesEmString = JSON.stringify(dados);

console.log(clientesEmString);
console.log(typeof clientesEmString); // Não é mais um objeto, agora é uma string e se comporta como tal.

// TRNASFORMANDO DE VOLTA EM OBJETO:

const objetoCliente = JSON.parse(clientesEmString);

console.log(objetoCliente);
console.log(typeof objetoCliente);


