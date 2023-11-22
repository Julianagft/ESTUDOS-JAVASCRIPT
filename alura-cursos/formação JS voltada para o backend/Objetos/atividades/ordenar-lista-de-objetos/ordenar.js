// Ordenando os elementos em ordem alfabática;

const clientes = require("./cliente.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((obj1, obj2) => {
        if (obj1[propriedade] < obj2[propriedade]) {
            return -1
        } else if (obj1[propriedade] > obj2[propriedade]) {
            return 1
        } else {
            return 0
        }
    })

    return resultado
}

const ordenados = ordenar(clientes, "nome");
console.log(ordenados);

// FUNÇÃO DE COMPARAÇÃO

// Quando se está lidando com objetos mais complexos e deseja ordenar o array com base em uma propriedade específica desses objetos, você precisa fornecer uma função de comparação personalizada. Essa função de comparação é responsável por dizer ao método sort() como comparar dois elementos do array.

// Na função de comparação:

// Se o valor da propriedade propriedade do primeiro objeto (obj1) é menor que o valor correspondente do segundo objeto (obj2), a função retorna -1.
// Se é maior, retorna 1.
// Se são iguais, retorna 0.
// Essa lógica permite ao método sort() entender como comparar os objetos com base em uma propriedade específica. O resultado é um array ordenado de acordo com os valores dessa propriedade.

// No seu exemplo, a função ordenar é flexível o suficiente para lidar com diferentes propriedades, tornando-a útil para ordenar o array de clientes por diferentes critérios, como nome, idade, etc.



// OBSERVAÇÃO: (ORDEM LEXOGRÁFICA)

// Como essa comparação de maior e menor é feita?
// Ao comparar duas strings, a primeira coisa que é comparada é o primeiro caractere. Se um caractere é menor que o outro em termos de ordem lexicográfica, a string é considerada "menor". Se for maior, é considerada "maior". Se os primeiros caracteres forem iguais, a comparação continua para o próximo caractere e assim por diante.

//EX: "Alice" e "Bob"
// O primeiro caractere de "Alice" é "A".
// O primeiro caractere de "Bob" é "B".

// Na ordem lexicográfica, "A" vem antes de "B". Portanto, "Alice" é considerado "menor" do que "Bob" quando você está usando a ordenação padrão de strings.

//PORTANTO não é a quantidade de letras da string que define se ela é maior ou menor mas sua ORDEM LEXOGRÁFICA. 
