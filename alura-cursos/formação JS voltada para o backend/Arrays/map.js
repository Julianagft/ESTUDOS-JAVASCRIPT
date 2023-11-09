// MAP

// É muito apropriado para reescrever arrays;
// Assim como o forEach ele recebe como parâmetro uma função callback;

const notas = [10, 6.5, 8, 7.5, 9.5];

const notasAtuais = notas.map((n) => {
    return n + 1 >= 10 ? 10 : n + 1; // vai acrescentar 1 "ponto" para cada nota do array; 

    // Não queremos que passe de 10 então utilizamos um operador ternario para criar uma condicional dentro do map! (Se a nota + 1 passar de 10 mantém a nota 10, senão acrescenta 1.)
});

console.log(...notasAtuais);

// Com o map eu vou retornar o valor que eu quero sobreescrever naquela nota em específico;

// O map() também funciona como uma estrutura de repetções;



// return n + 1 >= 10 ? 10 : n + 1 (n+1 é igual ou maior que 10? Se sim retorna 10, senão retorna n+1)