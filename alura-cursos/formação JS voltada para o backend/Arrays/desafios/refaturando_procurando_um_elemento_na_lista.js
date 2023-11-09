// CÓDIGO REFATURADO

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
const alunos_e_medias = [alunos, medias];


function exibeNomeENota(aluno) {
    if (alunos_e_medias[0].includes(aluno)){
        
        // const alunos = alunos_e_medias[0];
        // const medias = alunos_e_medias[1];

        const [alunos, medias] = alunos_e_medias; //equivale as duas linhas de cima (alunos na posição 0 e medias na posição 1);
        // Isso se chama 'desestruturação de listas';


        //Separando as constantes assim fica bem mais legível.

        const indice = alunos.indexOf(aluno); 
        const mediaDoAluno = medias[indice]  

        console.log(`O aluno(a) ${aluno} está cadastrado e possui média ${mediaDoAluno}!`)

    } else {
        console.log('Aluno não encontrado!')
    }
}

exibeNomeENota('Juliana');


