function executar (fn) {
    if(typeof fn === 'function'){
        console.log (fn(90,50)); //Se eu apagar os valores numéricos o resultado será 'NaN';
    }
}

function somar (a,b) {
    return a + b;
}

function subtrair (a,b) {
    return a - b;
}

executar (somar); // Teremos um problema pois 'EXECUTAR' vem sem parametros e 'SOMAR' exige parametros;
// O resultado será um NaN;

//Para que funcione preciso acrescentar valores a 'EXECUTAR';
executar (subtrair);

