// .....TROCAR O VALOR DAS VARIÁVEIS...

let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7;
let temp = a; // uma variável temporária que não alterará o valor de "a";
a = b;
b = temp;

console.log (a);
console.log (b);

/* Ou também poderia ser:
       [a,b] = [b,a];
chegaríamos ao mesmo resultado;*/
