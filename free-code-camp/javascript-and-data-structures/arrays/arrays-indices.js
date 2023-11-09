// Podemos acessar os dados dentro de arrays usando indexes.

// Os índices de um array são escritos na mesma notação com colchetes que as strings usam. Porém, em vez de especificar um caractere, eles estão especificando um item do array. Assim como ocorre com as strings, os arrays usam indexação de base zero, de forma que o primeiro elemento de um array possui índice 0.

//EXEMPLO: 

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1]; 
console.log(data)

//Vai retornar 50 no console;
//----------------------------------------------------------------------------


//  * Modificar dados de array com índices *

// Ao contrário das strings, as entradas de arrays são mutáveis e podem ser alteradas livremente, mesmo se o array foi declarado com const.
// Exemplo

const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log (ourArray[0])

// ourArray agora tem o valor [15, 40, 30].
//--------------------------------------------------------------------------

// * Acessar arrays multidimensionais com índices *

// Uma maneira de pensar em um array multidimensional é como um array de arrays. Quando você usa colchetes para acessar seu array, o primeiro conjunto de colchetes se refere às entradas no array mais exterior (o primeiro nível), e cada par adicional de colchetes refere-se ao próximo nível de entradas interno.

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];

  console.log(element)

// Aqui estão os passos de acesso aos valores:

// 1. arr[3] acessa o quarto elemento de arr, que é ele próprio outra matriz: [[10, 11, 12], 13, 14].

// 2. Em seguida, arr[3][0] acessa o primeiro elemento desta submatriz, que é [10, 11, 12].

// 3. Por fim, arr[3][0][1] acessa o segundo elemento de [10, 11, 12], que é 11.