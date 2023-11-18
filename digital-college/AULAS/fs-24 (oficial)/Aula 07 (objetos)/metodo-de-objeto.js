let gato = {
    nome: "chaninho",
    peso: 5,
    raca: "rajadinho",

    miar() {
        return "miaaauuuu"
    },

    toString() {
        return this.nome
    },
}

console.log(gato.toString());