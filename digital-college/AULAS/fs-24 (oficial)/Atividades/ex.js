// Array de números
const numeros = [5, -2, 10, -8, 3];

// Função para verificar se um número é positivo ou negativo
function verificarPositivoOuNegativo(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Zero ou neutro";
  }
}

// Iterar pelo array e verificar cada número
for (let i = 0; i < numeros.length; i++) {
  const resultado = verificarPositivoOuNegativo(numeros[i]);
  console.log(`O número ${numeros[i]} é ${resultado}`);
}