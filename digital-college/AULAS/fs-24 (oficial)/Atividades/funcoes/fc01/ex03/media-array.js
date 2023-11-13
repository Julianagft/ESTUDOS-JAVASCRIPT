const array1 = [10, 6.5, 8, 7.5];
const array2 = [8.5, 5, 8.5, 6];
const array3 = [9, 6.5, 9, 10];
const array4 = [10, 7.5, 9.5, 10];


function mediaArray (array) {
    let somaDosNumeros = 0;// Se eu declarar fora da função ela irá manter seu estado acumulado entre chamadas diferentes da função. Isso significa que, quando eu chamo a função para um segundo array, ela continua somando o resultado acumulado dos arrays anteriores.

    for (let c = 0; c < array.length; c++) {
       somaDosNumeros += array[c];
    }

    return somaDosNumeros / array.length;
}

console.log(`A média aritmética do Array 01 é ${mediaArray(array1).toFixed(2)}.`);
console.log(`A média aritmética do Array 02 é ${mediaArray(array2).toFixed(2)}.`);
console.log(`A média aritmética do Array 03 é ${mediaArray(array3).toFixed(2)}.`);
console.log(`A média aritmética do Array 04 é ${mediaArray(array4).toFixed(2)}.`);