// PROCURANDO UM ELEMENTO NA LISTA

// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.


const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
const alunos_e_medias = [alunos, medias];


function exibeNomeENota(aluno) {
    if (alunos_e_medias[0].includes(aluno)){
        
        const indice = alunos_e_medias[0].indexOf(aluno); //Para saber a média eu preciso saber qual o indice do aluno. Com o indexOf eu sei qual o indice do aluno que eu passar como parametro;

        const mediaDoAluno = alunos_e_medias[1][indice]  

        console.log(`O aluno(a) ${aluno} está cadastrado e possui média ${mediaDoAluno}!`)

    } else {
        console.log('Aluno não encontrado!')
    }
}

exibeNomeENota('Ana');


