let M1 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let M2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

for(let x = 0; x < 3; x++) {
    for(let z = 0; z < 3; z++) {
        M1[x][z] = x + (2 * z) + 1; // Adicionado +1 para ajustar o índice
    }
}

for( let x = 0; x < 3; x++) {
    for(let z = 0; z < 3; z++) {
        M2[x][z] = M1[z][x]; // Ajustado para trocar as linhas e colunas
    }
}


// console.log(M1[2][2])
// console.log(M2[2][2])
console.log(M1[1])
console.log(M2[1])

// console.log(M1[2][2] + M2[2][2]); 