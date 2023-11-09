let cond = true;

while(cond) {
    let resposta = Number(prompt('Qual a sua idade?'));
    if (resposta >= 18) {
        cond = false;
    }
}