
function verificador() {
    let n1 = Number(prompt(`Primeira nota do aluno(a):`));
    let n2 = Number(prompt(`Primeira nota do aluno(a):`));
    let media = (n1 + n2) / 2;
    let resp = document.getElementById('resp');

    if (n1 > 10 || n2 > 10) {
        alert('Nota inválida!')
        return
    }

    if (media >= 3 && media <= 6) {
        // RECUPERAÇÃO 

        resp.innerHTML = `<p>Nota 1: ${n1}</p>
                        <p>Nota 2: ${n2}</p>
                        <p>Média: ${media}</p>
                        <p>Com média entre 3.0 e 6.0, o aluno está em <mark class="mark_1">RECUPERAÇÃO</mark>!</p>`
    } else if (media > 6) {
        // APROVADO 

        resp.innerHTML = `<p>Nota 1: ${n1}</p>
                        <p>Nota 2: ${n2}</p>
                        <p>Média: ${media}</p>
                        <p>Com média entre 3.0 e 6.0, o aluno está em <mark class="mark_2">APROVADO</mark>!</p>`
   } else {
        // REPROVADO 

    resp.innerHTML = `<p>Nota 1: ${n1}</p>
    <p>Nota 2: ${n2}</p>
    <p>Média: ${media}</p>
    <p>Com média abaixo de 3.0, o aluno está <mark class="mark_3">REPROVADO </mark>!</p>`
   }
}