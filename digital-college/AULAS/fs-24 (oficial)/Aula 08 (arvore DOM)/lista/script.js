const lista = document.getElementById('lista');

const botao = document.getElementById('botao');

let nomes = ["Juliana", "Jason", "Aline", "Fabiola"]

let posicaoAtual = 0;

botao.addEventListener('click', () => {
    
    if (posicaoAtual < nomes.length) {
        // Obtém o próximo nome
        const nomeAtual = nomes[posicaoAtual];

        // Cria um novo elemento li
        const li = document.createElement('li');

        // Define o texto do novo item como o nome atual
        li.textContent = nomeAtual;

        // Adiciona o novo item à lista
        lista.appendChild(li);

        // Incrementa a posição para o próximo nome
        posicaoAtual++;
      } else {
        alert('Todos os nomes foram adicionados!');
      }
})