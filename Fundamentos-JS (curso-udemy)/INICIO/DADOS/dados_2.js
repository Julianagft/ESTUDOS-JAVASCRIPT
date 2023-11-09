console.log(19.90 * 0.6);/*se o desconto é 40%, isso quer 
                            dizer que o valor que vai
                            permanecer é o restante que é 60% (0.6)*/

let preco = 19.90;
let desconto = 0.4;


let PrecoComDesconto = preco * (1- desconto);
console.log(PrecoComDesconto);

let nome = "caderno"; //String (Texto) -> Sequencia de símbolos;
let categoria = "Papelaria"; // Sempre que tiver um texto no meio e usar o "+" ele irá juntar as duas palavras;

console.log("Produto: " + nome 
+ ", Categoria: " + categoria
+ ", Preço: " + preco
+ ", Desconto: " + desconto);   

console.log (1+1);//Aqui acontece a soma normalmente pois são dois valores numéricos (resultado: 2);
console.log ("1" + 1)// isso aconteceu pq juntou um "texto" com um valor numérico e aconteceu a concatenação (resultado: 11);



