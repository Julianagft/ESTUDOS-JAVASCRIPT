// Objeto Data 
// Atributos:(dia/mes/ano)
// Método: exibir -> "dia/mes/ano"

const data = {
    dia: 29,
    mes: 05,
    ano: 1995,

    exibir: function() {
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
 
};

console.log (data.exibir());