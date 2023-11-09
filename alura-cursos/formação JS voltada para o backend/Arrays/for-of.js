// MEDIA FOR OF 

const notas = [10, 6.5, 8, 7.5];

for (let elementos of notas) { // vai  imprimir os elementos de notas
    // console.log(elementos);
}
// TRADUÇÃO: Para cada elemento de notas execute o código dentro da chave;

// Quando queremos percorrer um array, podemos usar o for of. Assim, o JavaScript já entende que temos que percorrer o array do início ao fim. A grande vantagem dessa estrutura é que podemos selecionar diretamente o valor de cada elemento da lista e, por exemplo, imprimi-lo com um console.log();

// MÉDIA

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

console.log(somaDasNotas);

const media = somaDasNotas/notas.length
console.log(`A média das notas é ${media}.`); 

// O for of é uma forma mais concisa de escrever o for tradicional, mas depende da situação. Ele funciona em casos que precisamos percorrer uma lista do início ao fim, passando por todos os elementos.

// O for of não tem toda essa flexibilidade, contudo ele fornece uma sintaxe mais sucinta que serve para a maioria dos casos, quando o objetivo é percorrer um array completo.