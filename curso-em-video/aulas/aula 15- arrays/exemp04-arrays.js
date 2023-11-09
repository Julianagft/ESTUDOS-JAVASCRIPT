//Achando a posição do elemento usando indexOf e condicionais;

let num = [5,8,7,18]
let pos = num.indexOf(24)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
