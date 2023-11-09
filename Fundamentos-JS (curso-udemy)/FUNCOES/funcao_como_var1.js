//Podemos armazenar uma fuunção dentro de uma variável;

const x = 123;
let y = 321;
var z = 323;
    
/*function (a, b) { //Função anônima 
  return a+b;
} */


    
  const somar = function (a,b) {
        return a +b;
    }
 
 
    console.log (somar(x,y));