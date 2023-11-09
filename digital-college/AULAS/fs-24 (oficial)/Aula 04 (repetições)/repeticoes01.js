// O inverso (quando clicar em ok sai e cancela fica);

let cond = true;

while(cond) {
    let resposta = confirm('Já chegamos?');

    if (resposta) {
        cond = false; 
    } else {
        cond = true;
    } // Esse 'else' é redundante mas fica melhor de entender.
}


// Eu poderia ter resolvido de forma bem mais fácil colocando apenas o ! :


// while(cond) {
//    cond = !confirm('Já chegamos?');

 
