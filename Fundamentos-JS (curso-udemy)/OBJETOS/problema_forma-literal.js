const d1 = {
    dia: 29,
    mes: 05,
    ano: 1995,

    exibir: function() {
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
 
};


const d2 = {
    dia: 10,
    mes: 02,
    ano: 1967,

    exibir: function() {
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
 
};

const d3 = {
    dia: 30,
    mes: 12,
    ano: 1985,

    exibir: function() {
        return `${this.dia}/ ${this.mes}/ ${this.ano}`;
    }
 
};

console.log (d1.exibir());
console.log (d2.exibir());
console.log (d3.exibir());

//Se eu criar o código dessa forma terei sempre duplicação de código. É importante ter o máximo de reuso possível em uma aplicação.



