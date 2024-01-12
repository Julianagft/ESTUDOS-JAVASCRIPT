let input = document.getElementById('inputCalc');
let result = document.querySelector('#resultCalc');

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculo();
    }
})

function calculo() {
    const resultCalc = eval(input.value) //eval() executa qualquer instrução javascript que esteja dentro de uma string;
    // muito útil para operações matematicas em que se usam letras, parentesis, etc; 

    result.innerText = resultCalc;

}