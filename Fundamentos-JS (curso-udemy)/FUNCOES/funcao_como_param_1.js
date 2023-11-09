//RECURSO MUITO UTILIZADO;

function executar (param) {
    if (typeof param === "function"){
        console.log (param()); 
    }
    
}
//CTRL D seleciona todos os trechos com o mesmo nome e posso alterar todos ao mesmo tempo!
function bomDia () {
    return "Bom dia"

}

executar (3);
//executar (bomDia ()); Dessa forma não funcionará pois é como se eu estivesse passando o resultado da função, e não a própria função para executar; 
// Para que funcione preciso tirar os parênteses "()";

executar (bomDia);