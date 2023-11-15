// FILTRANDO DADOS DENTRO DE UMA LISTA 

const idades = [12,16,15,14,17,20];

let maiores = false;

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        console.log(idades[i]);
        maiores = true;
    }
}

if (!maiores) {
    console.log("Não há idades maiores que 18 na lista!");
}