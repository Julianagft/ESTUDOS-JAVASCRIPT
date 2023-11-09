const notas = [7, 8, 3, 5, 10, 9, 8, 8];


// foreach: Quer dizer, 'Percorra cada uma dos elementos';
// Referenciamos com o 'Foreach' mas continuamos usando a palavra 'FOR';

for (let nota of notas) { //Irá repetir o laço FOR e a quantidade de elementos que tem no Array, e para cada repetição essa variável NOTA terá o valor atual;
    console.log(nota);
}

//Essa é uma forma bem mais simples de percorrer cada um dos elementos sem se preocupar com a variável que irá controlar o laço;


//Essa é a melhor forma e a mais simples;

let indices = '';

for (let indice in notas) { //Outra forma de percorrer todos os elementos mas agora percorrendo os indices;
    indices += indice + '';
}

console.log (indices);