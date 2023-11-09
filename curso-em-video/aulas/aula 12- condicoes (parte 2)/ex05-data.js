let agora = new Date();
let hora = agora.getHours();
let minutos = agora.getMinutes();
let dia = agora.getDate();
let mes = agora.getMonth() + 1; //No JavaScript, o método getMonth() retorna o número do mês, começando a contar do zero (janeiro é 0, fevereiro é 1 e assim por diante). Portanto, para exibir o mês corretamente, você deve adicionar 1 ao valor retornado por getMonth();
let ano = agora.getFullYear();
//essas duas variaveis em conjunto para pegar a data e hora exata do dia. 

console.log(`Agora são exatamente ${hora}:${minutos} do dia ${dia}/${mes}/${ano}!`);

if (hora < 12) {
    console.log(`Bom dia!`);
} else if (hora <= 18){ //posso criar quantos else if eu quiser dentro de uma mesma estrutura.
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}