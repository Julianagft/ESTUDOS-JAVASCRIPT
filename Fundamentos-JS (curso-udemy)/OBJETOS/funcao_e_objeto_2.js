//Outra forma de usar a Função para resolver o problema da forma literal!

/* function criarData(dia, mes, ano) {
    return {
        dia: dia, //O primeiro é a chave do objeto e o segundo são os valores, que vem a partir dos parametros da função;
        mes: mes, //Do lado esquerdo posso nomear de qualquer maneira, mas do lado direito precisa estar exatamente igual aos parametros;
        ano: ano, // Mas no caso em que ambos a chave e os valores são exatamente iguais posso simplificar deixando apenas um;
        exibir: function() {
            return `${this.dia}/ ${this.mes}/ ${this.ano}`;
        }
     
    }

}; */

/*function criarData(dia, mes, ano) {
    return {
        dia, 
        mes, 
        ano, // Mas no caso em que ambos a chave e os valores são exatamente iguais posso simplificar deixando apenas um;
        exibir: function() {
            return `${this.dia}/ ${this.mes}/ ${this.ano}`;
        }
     
    }

}; */

function criarData(dia, mes, ano) {
    return {
        dia, 
        mes, 
        ano, 
        exibir() //Outra forma de simplificar é eliminando os dois pontos e a palavra FUNCTION e deixar os parenteses (); 
        {
            return `${this.dia}/ ${this.mes}/ ${this.ano}`;
        }
     
    }

};

const d1 = criarData (09, 10, 2021);
const d2 = criarData (29, 05, 1995);
const d3 = criarData (07, 01, 2015);

console.log (d1.exibir());
console.log (d2.exibir());
console.log (d3.exibir());