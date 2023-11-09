let temDinheiro = true;
let estaEnsolarado = false;
let carroEstaNaGaragem = true;

let resultadoE = "#1 - Vai pro shopping?";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = " #2 - Vai pro shopping?";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log (resultadoOU);

console.log (true ^ false); //Ou exclusivo;
console.log (true ^ true);
console.log (false ^ false);

console.log (true != false); 
console.log (true != true);
console.log (false != false);

console.log ("Não verdadeiro:" + ! true);
console.log ("Não falso:" + ! false);