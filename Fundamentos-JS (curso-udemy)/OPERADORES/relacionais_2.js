let a = 1;
let b = "1";

console.log (a == b);
// Ao fazer esta comparação estou comparando um número com um conteúdo textual;
// Porém os conteúdos são iguais, então a resposta será "TRUE";

console.log (a === b); //Aqui é um comparação para saber se "a" e "b" são ESTRITAMENTE iguais;
                      // Esse tipo de comparação (===) é própria da linguagem Java Script;
                      // Nesse caso a resposta será "FALSE" pois são tipos diferentes de variável, embora o conteúde seja igual;


//EX:
console.log (a != b ); // Nesse caso a resposta será "FALSE" pois o conteúde de "a" e "b" é o mesmo;

console.log (a !== b); // Já aqui a resposta é "TRUE" pois queremos saber se "A" é ESTRITAMENTE diferente de "B";


// O JAVA SCRIPT permite que você compare duas variáveis de tipos diferentes pois é uma linguagem e "TIPAGEM FRACA";






