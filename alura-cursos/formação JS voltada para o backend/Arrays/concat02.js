

const arrayOriginal = ["Maria", "Carlos", "Samanta"];

const arrayConcat = arrayOriginal.concat("André", "Fernanda");

console.log(arrayConcat); //O JavaScript concatena o array principal e as strings de texto passadas como parâmetro para criar outro array, mantendo o original sem alterações.

const arrayConcat2 = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"]);

console.log(arrayConcat2);
// Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o array original;

const arrayOriginal2 =  [50, 60, 70];
const arrayConcat3 = arrayOriginal2.concat([80, [90, 100]])

console.log(arrayConcat3);
// Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.