// Parâmetro (nota) -> Retorno (Conceito)


function notaParaConceito (nota){   
    switch (Math.ceil(nota)) { //Arredonda notas quebradas para cima;
        case 10: return 'A+';
        case 9: return 'A';
        case 8: return 'B+';
        case 7: return 'B';
        case 6: return 'C+';
        case 5: return 'C';
        case 4: return 'D+';
        case 3: return 'D';
        case 2: return 'E+';
        case 1: return 'E';
        case 0: return 'F';
        default: return null;
    }
}

console.log (`O conceito do aluno é ${notaParaConceito(7.2)}`);
console.log ("O conceito do aluno é:", notaParaConceito(2.5)); //Pra mim bem menos complicado fazer assim, mesmo sendo básico;
