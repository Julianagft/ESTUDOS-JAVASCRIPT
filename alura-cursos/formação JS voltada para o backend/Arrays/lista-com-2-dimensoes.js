// LISTAS COM DUAS DIMENSÕES (MATRIZES):

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

console.log(`O segundo elemento da lista é a aluna ${alunos[1]} que tem média ${medias[1]}.`);

const alunos_e_medias = [alunos, medias];


//Acessando elementos específicos:

console.log(alunos_e_medias);

console.log(`O segundo elemento da lista 'alunos_e_medias' é a aluna ${alunos_e_medias[0][1]} que tem média ${alunos_e_medias[1][1]}.`);