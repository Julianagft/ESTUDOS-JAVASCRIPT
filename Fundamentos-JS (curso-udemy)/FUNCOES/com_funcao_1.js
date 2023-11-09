
const d1 = 3;
const m1 = 7;
const a1 = 2021;

function exibirData1() { //SEMPRE que eu for definir uma função eu uso a palavvra reservada 'FUNCTION';
    //Depois da função, assim como nas variáveis e constantes é preciso nomeá-la para que o código funcione;
    console.log(`Dia: ${d1}`);
    console.log(`Mês: ${m1}`);
    console.log(`Ano: ${a1}`);
} //Para fins de aprendizado todas as funções terão um bloco de código;


const d2 = 24;
const m2 = 12;
const a2 = 2022;

function exibirData2() {
    console.log(`${d2}/${m2}/${a2}`); //Posso trocar pelo hífen (-) se eu quiser um formato de data diferente;
  
}

exibirData1();
exibirData2();