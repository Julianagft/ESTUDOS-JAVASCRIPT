let cargaSemanal = 40;
let cargaMensal = cargaSemanal * 5;
let salarioHora = 17.5
let salarioLiquido = salarioHora * cargaMensal;

console.log ("João trabalha 40h semanais. Qual seu salário líquido mensal considerando que ele recebe 17.50 R$ por hora?");
console.log ("Seu salário líquido será ",salarioLiquido,".00 R$");

let imposto = salarioLiquido - salarioLiquido * 30/100; //Que assalto esse imposto viu kkkkk!
console.log ("Com a dedução de 30% do imposto seu salário total será ",imposto,".00 R$");