
function listaNumerica(lista) {
 const maiorNumero =  Math.max(...lista);
 const menorNumero = Math.min(...lista);

 console.log(`O maior número da lista numérica informada é ${maiorNumero} e o menor número é ${menorNumero}.`);
}

const arrayNumeros = [56565,8542,98,12,7,85,7,96325,14587,85]

listaNumerica(arrayNumeros);
