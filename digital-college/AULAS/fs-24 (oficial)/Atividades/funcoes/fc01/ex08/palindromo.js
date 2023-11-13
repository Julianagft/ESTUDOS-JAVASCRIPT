
function palindromo (palavra) {
    // Remover espaços em branco e tornar minúsculas todas as letras
    palavraFormatada = palavra.toLowerCase().replace(/\s/g, '')

    // Inverte a palavra
    const palavraInvertida = palavraFormatada.split('').reverse().join('');

    // Verificar se a palavra original é igual à palavra invertida
    if (palavraFormatada === palavraInvertida ) {
        return `A palavra ${palavra} é palíndroma.`
    } else {
        return `A palavra ${palavra} não é palíndroma.`
    }
}


console.log(palindromo('reviver'));

// .replace(/\s/g, ''): Isso utiliza a função replace para substituir todos os espaços em branco (\s) na palavra por uma string vazia (''). O modificador g significa "global", o que faz com que todos os espaços em branco na string sejam substituídos, não apenas o primeiro encontrado.


// palavraFormatada.split(''): Isso converte a string palavraFormatada em um array de caracteres, onde cada caractere é um elemento do array. O método split('') divide a string em cada caractere.

// .reverse(): Isso inverte a ordem dos elementos no array. Ou seja, o primeiro elemento do array se torna o último, o segundo se torna o penúltimo, e assim por diante.

// .join(''): Isso converte o array de caracteres de volta para uma string, juntando todos os elementos do array em uma única string. O argumento passado para join('') é uma string vazia, o que significa que não haverá nenhum caractere separador entre os elementos.