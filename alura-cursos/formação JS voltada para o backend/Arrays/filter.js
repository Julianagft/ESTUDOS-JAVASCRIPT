// FILTER

const alunos = ['Ana', 'Maria', 'Mauro', 'Marcos'];
const medias = [7, 9, 4.5, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);


// No filter sempre temos que retornar verdadeiro ou falso;