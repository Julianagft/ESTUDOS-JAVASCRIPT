// Dividindo a sala de aula (SLICE);

const alunos = [
    'Juliana', 
    'Mateus',
    'Rochelle',
    'Patrique',
    'Teresa',
    'Carlos',
    'Roberta',
    'Veronica',
    'Henrique',
    'Georgia',
    'Samuel',
    'Rogerio',
    'Manuel',
    'Laryssa',
    'Jacqueline',
    'Ronnier',
    'Aline',
    'Jason',
    'Cauan',
    'Virginia'
];

alunos.slice(0,10); 
// Slice seleciona quais elementos do Array eu quero. No caso quero os 10 primeiros alunos.

//ATENÇÃO: O segundo parâmetro do slice não é incluido dentro do corte. Então nesse caso eu selecionei os alunos que estão do índice 0 ao 9 (o 10 não entra);

console.log(alunos);

// O slice não altera o Array original, então para selecionar os itens que eu quero dentro do indice preciso criar uma nova variável (ou constante);

// const sala1 = alunos.slice(0,10);
// const sala2 = alunos.slice(10); 

//Quando eu não coloco o segundo parâmetro ele entende automaticamente que quero pegar até o final do array;

// DEIXANDO O CÓDIGO MAIS DINÂMICO 
// Quando temos listas muito longas (que é o comum) é interessante usar o '.lenght';

const sala1 = alunos.slice(0, alunos.length/2);
const sala2 = alunos.slice(alunos.length/2); 

// Assim eu sei que estou pegando metade da lista independente do número;

console.log(sala1);
console.log(sala2);