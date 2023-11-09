// Na Ciência da Computação, uma fila é uma estrutura de dados abstrata onde itens são mantidos em ordem. Novos itens podem ser adicionados no final da fila e itens mais antigos são removidos do início da fila.

// Escreva a função nextInLine, que recebe um array (arr) e um número (item) como argumentos.

// Adicione o número no final do array e então remova o primeiro elemento do array.

// A função nextInLine deve, em seguida, retornar o elemento que foi removido.

function nextInLine(arr, item) {
  
    arr.push(item);
   
    let removedItem = arr.shift();
   
    return removedItem;
  }
  
  // Configuração
  let testArr = [1, 2, 3, 4, 5];
  
  // Exibir o código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

