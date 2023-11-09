// OPERADORES TERNÁRIOS

const idadeMinima = 18;
const idadeCliente = 16;

// if (idadeCliente >= 18) {
//     console.log('Pode beber álcool');
// } else {
//     console.log('suco');
// }


             //condição                   //true                //false
console.log(idadeCliente >= idadeMinima ? 'pode beber álcool' : 'suco');

//Não é recomendado quando for colocar condição dentro de condição, pois o código fica complicado e difícil de ler. Nesses casos utilize o IF/ELSE;