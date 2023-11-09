let x = 10;
x = 6;

console.log (x); // O resultado será "6" por que "10" foi substituido;

x = x + 6;
console.log(x);
// "=" símbolo da ATRIBUIÇÂO, é um operador binário;
//Opera com uma expressão do lado direito. Essa expressão terá um resultado que será atribuído a variável que está do lado esquerdo;

x = x - 1;
console.log (x);
//Considerou o ultimo valor atribuido a "x";
//---------------------------------------------------

let y = 20;
y += 10; //ATRIBUIÇÃO ADITIVA
console.log (y); //Resultado: 30;

y -= 2; //ATRIBUIÇÃO SUBITRATIVA;
console.log (y); //Resultado: 28;

y *= 2; //ATRIBUIÇÃO MULTIPLICATIVA; 
console.log(y); //Resultado: 56; 

y /= 4; //ATRIBUIÇÃO DIVISIVA;
console.log(y); //Resultado: 14;

y %= 2; //ATRIBUIÇÃO MODULAR;
console.log (y); //Resultado: 0;

//TAMBÉM PODEMOS USAR VALORES TEXTUAIS:
let w = 'texto'
w += ', mais texto';
w += '!!!';
console.log (w); //Usou o texto anterior e acrescentou mais texto;
                 //Posso montar um texto a partir de várias sentenças de código;
                 
