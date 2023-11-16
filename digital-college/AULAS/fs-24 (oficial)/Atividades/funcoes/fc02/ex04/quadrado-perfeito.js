
function quadradoPerfeito(n1, n2) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    return n1 === n2 ** 2;
}

const num1 = 16; 
const num2 = 4;

if (quadradoPerfeito(num1,num2)){
    console.log(`O número ${num1} é o quadrado perfeito de ${num2}.`)
} else {
    console.log(`O número ${num1} não é o quadrado perfeito de ${num2}.`)
}