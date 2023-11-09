const hora = 23;
let saudacao;

if (hora < 12){
    saudacao = 'Bom dia!';
} 
else {
    if (hora <18){
        saudacao = 'Boa Tarde!'
    } else {
        saudacao = "Boa Noite!"
    }
    
}

console.log(saudacao);
