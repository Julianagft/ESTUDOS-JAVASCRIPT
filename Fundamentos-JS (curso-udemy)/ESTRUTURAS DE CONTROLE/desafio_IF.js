/*
CONCEITO        FAIXA DE NOTA CORRESPONDENTE

A               Entre 9.0 e 10
B               Entre 7.0 e 8.9
C               Entre 5.0 e 6.9
D               Entre 4.5 e 4.9
F               Abaixo de 4.5

*/

const nota = 4.7;

if (nota <= 10 && nota >= 9) {
    console.log('A');
}

if (nota >= 7 && nota <= 8.9) {
    console.log ('B');
}

if (nota >= 5 && nota <= 6.9) {
    console.log ('C');
}

if (nota >= 4.5 && nota <= 4.9) {
    console.log ('D');
}

if (nota <= 4.5) {
    console.log ('F');
}