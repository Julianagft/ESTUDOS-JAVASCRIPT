const arrayNums = [1, 2, 3, 4];

// function multiplicaPorDez (num) {
//     return num * 10;
// }

// const arraySomada = arrayNums.map(multiplicaPorDez);

// console.log(arraySomada);


const arraySomada = arrayNums.map(num => num * 10)

console.log(arraySomada);

// substituímos uma função externa e nomeada (a função multiplicaPorDez), por uma arrow function anônima que existe somente dentro do map(). Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos do array que será iterado pelo map().

// Por isso, quando utilizamos uma função externa como callback de um map(), não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.

// Ambos os casos de uso são válidos; as funções externas permitem reaproveitamento de código, mas há vários momentos em que isso não será necessário.
