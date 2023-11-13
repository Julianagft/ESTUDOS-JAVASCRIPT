// REDUCE

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Tirar a média geral:

function calculaMedia(notas) {
    const somaDasNotas = notas.reduce((acumulador, nota) => {
        return acumulador + nota
    }, 0) // a FnFunction é o primeiro parâmetro do reduce e o '0' é o segundo parâmetro, que será o valor inicial do acumulador. 

    const media = somaDasNotas / notas.length
    return media; 
}

// O reduce() não altera o array original por isso eu precisei salvar dentro de uma constante; 

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);
