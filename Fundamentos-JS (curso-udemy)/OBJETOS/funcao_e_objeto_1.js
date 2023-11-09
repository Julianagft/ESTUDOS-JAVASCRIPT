//Usando a Função para resolver o problema da forma literal!

function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
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