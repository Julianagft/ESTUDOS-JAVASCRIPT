// SPREAD OPERATOR

//Copiando um array;

const notas = [7, 7, 8, 9];

const novasNotas = [...notas];

// novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`)
console.log(`As novas originais são ${notas}`)

// Se eu simplesmente dissesse que novasNotas  = notas o JS entenderia que as duas variáveis são as mesmas, então qualquer alteração em novasNotas afetaria o original notas e vice versa; 

// Por isso crio um novo array e uso o spread operator;