//Forma ainda mais simples que no exemplo 03 usando laços;

let num = [5,8,7,9,1,3]

//Estrutura FOR IN (um for utimizado para variáveis compostas (vetores) e objetos)
for (let pos in num) { //
    console.log(num[pos])
}

//TRADUÇÃO: Para cada posição na variável composta ('num') eu vou mostrar o num[pos];

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}