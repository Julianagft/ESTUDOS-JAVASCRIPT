// Calcular a média do aluno usando as duas maiores notas;
//Mostrar Status:
// Aluno estará aprovado: Nota >= 7;
//Aluno estará em recuperação: Nota >= 4, >7;
// Aluno estará reprovado: Nota < 4;

const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function minimo (n1, n2){ //No caso aqui só consegui usar dois parâmetros por vez pq estou utilizando o conceito de IF/ELSE (Return) pra definir inha nota, mas consigo as três notas através do console.log;
    return n1 <= n2 ? n1:n2;
}

console.log ("Menor nota do Aluno:", minimo (nota1, minimo(nota2, nota3))); //Dessa forma consigo verificar qual das três notas é a menor, já que a função só contempla dois parametros;


function media (n1, n2, n3) {
    const menorNota = minimo (n1, minimo (n2,n3));

    if(menorNota === n1) {
        return (n2 + n3) /2
    } else if(menorNota ===n2) {
        return (n1 + n3) /2;
    } else {
        return (n1 + n2) / 2;
    }
}

function mediaParaStatus (media) {
    if (media >=7) {
        return "Aprovado!";
    } else if (media >=4) {
        return "Recuperação!";
    } else {
        return "Reprovado!";
    }
}

const mediaFinal = media (media(nota1, nota2, nota3));
const statusFinal = mediaParaStatus (mediaFinal);


console.log ("Média Final do Aluno:", media(nota1, nota2, nota3));

console.log ("Status Final do Aluno: ",statusFinal); // O meu tá voltando "Reprovado" e eu não sei pq :////;"

//O Ideal é não colocar muitas responsabilidades dentro de uma única função!


//Por algum motivo o meu só dá reprovado, não sei qual o problema :((((
