const numeros = [1, 2, 3, 4, 5, 8];

numeros.splice (1,1); //O SPLICE serve para remover elementos dentro de um ARRAY;
// 1º: O primeiro parametro utilizado será o indice do elemento que desejo remover: Quero remover o número '2', cujo índice é UM (1);
// 2º: O segundo parâmetro será a quantidade de elementos que desejo remover: No caso só quero remover um, então coloco o número UM (1);

console.log(numeros);

console.log(numeros.pop());//O POP irá remover o último elemento do ARRAy;
//Ele retorna este último elemento caso eu queira saber qual foi o último elemento removido;
console.log(numeros.pop()); //Como chamei mais uma vez irá remover o 8, e o 5.
//Como chamei dentro do 'console.log' consigo identificar quais elementos foram retirados do ARRAY;

console.log(numeros);



