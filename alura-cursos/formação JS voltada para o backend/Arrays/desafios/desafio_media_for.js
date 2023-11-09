// Calcular a Média com o FOR

// Calcule a média entre as seguintes notas, usando o for: 10, 6.5, 8, 7.5;

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let c = 0; c < notas.length; c++) {
    somaDasNotas += notas[c]; //Agora a cada repetição irá somar o valor ao valor anterior; 
 }

 const media = somaDasNotas/notas.length

 console.log(`A média das notas é ${media}.`);  