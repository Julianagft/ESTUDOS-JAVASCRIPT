let a = 1;
let b = 2;

//a ++; Passaria a ser verdadeiro pq o valor da variável "a" foi encrementado;

console.log (++a === b++); //codigo confuso (não é bom escrever assim);

//++a tem precedencia sobre a++; 

console.log (a === b);

//Modo Correro:

a++;
console.log (a === b);
b++; 
// Fica mais fácil de visualisar e entender a ordem das precedencias;

