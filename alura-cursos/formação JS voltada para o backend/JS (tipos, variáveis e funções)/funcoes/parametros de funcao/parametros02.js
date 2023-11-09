// Função dentro de função como operação

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(3, 4));

function multiplica (n1=1, n2=1) {
    return n1 * n2
}
//posso usar os mesmos nomes de parametros para funções diferentes;

console.log(multiplica(soma(12,8), soma(33, -82)));

console.log(multiplica(2));
// ao definir os parametros de multiplica() = 1 eu evito que retorne NaN pois mesmo que eu defina apenas um valor em vez de dois, o 1 já será um valor pre definido e não ocasionará problemas com operações matemáticas. No entando jamais posso definir como 0.


// OBS: Não existe um limite de quantos argumentos eu preciso passar para a função, mas é BOA PRÁTICA que se passe poucos argumentos/parâmetros para a função. Isso facilita a manutenção do código!
