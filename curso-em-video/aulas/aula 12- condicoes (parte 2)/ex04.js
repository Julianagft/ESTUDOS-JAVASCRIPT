let idade = 66;

if (idade < 16) {
    console.log(`Não vota`)
} else if (idade >= 16 && idade < 18 || idade > 65) { //economiza bloco;
        console.log('Voto opcional!')
    } else {
        console.log(`Voto obrigatório!`)
    } 
    
