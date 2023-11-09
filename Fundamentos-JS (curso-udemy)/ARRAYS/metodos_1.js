const numeros = [1, 2, 3, 4, 5];

numeros.push(6); //Quando quero adicionar um elemento no ARRAY coloco o 'PUSH';
//Adicionei o sexto(6) elemento;
numeros[0] = 100; ///Alterei o elemento zero(0) que agora é o número '100';
numeros.includes(10); //'INCLUDES' irá dizer se determinado elemento pertence ou não ao ARRAY;
numeros.indexOf(4); //Com o 'INDEXOF' posso perguntar qual é o índice de um determinado elemento;

numeros.concat (7,8,9);// Com o 'CONCAT' conseguimos concatenar dentro do ARRAY mais elementos;
//Ela não causará impacto pois não  altera o ARRAy original, ela irá originar um novo ARRAY;



const numeros2 = numeros.concat (7,8,9);

console.log (numeros)
console.log (numeros.includes(10)); //Mostrará o resultado FALSO;
console.log (numeros.includes(6)); // Mostrará o resultado VERDADEIRO;
console.log(numeros.indexOf(4));

console.log (numeros.join('-')); //O 'JOIN' junta todos os elementos do ARRAY a partir de um determinado símbolo que eu coloque; 
//Os elementos agora estão separados por (-), ou por quelquer outro símbolo que eu deseje;

console.log (numeros2); //Gerou um novo ARRAY por conta do 'CONCAT';


//OBS: Alguns métodos irão gerar um novo ARRAY, e alguns métodos irão alterar o ARRAY original;

