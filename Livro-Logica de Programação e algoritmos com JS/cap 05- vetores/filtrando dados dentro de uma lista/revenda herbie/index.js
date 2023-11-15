// Também poderíamos atribuir 0 (valor inicial) e 1 (dentro do laço) para a variável maiores.
let carros = [];
let inmodelo = document.getElementById('inModelo');
let inpreco = document.getElementById('inPreco');

inpreco.addEventListener('keydown',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        adicionarCarros();
    }
});

function adicionarCarros() {
    let modelo = inmodelo.value;
    let preco = Number(inpreco.value)

    // Verifica o preenchimento dos campos:
    if (modelo == '' || preco == 0 || isNaN(preco)) {
        alert("Dados inválidos ou não informados!")
        inmodelo.focus();
        return;
    }

    // Adiciona dados ao vetor de objetos:
    carros.push({
        modelo: modelo,
        preco: preco
    });

    // Limpa campos e posiciona cursor inModelo:
    inmodelo.value = "";
    inpreco.value = "";
    inmodelo.focus();

    // Chama a função que lista os carros:
    listarCarros()
}

function listarCarros() {
    // Verifica se o vetor está vazio:
    if (carros.length == 0) {
        alert("Não há carros na lista!")
        return
    }

    let lista = ""; //Para concatenar a lista de carros;

    // Percorre os elementos do vetor:
    for (let i = 0; i < carros.length; i++) {
        // Adiciona à lista, cada objeto do vetor.
        lista += `${carros[i].modelo} - R$: ${carros[i].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}` + "\n" 
    }

    document.getElementById("outLista").textContent = lista;

}

function filtrarCarros() {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    // Verifica se não preencheu:
    if (maximo == 0 || isNaN(maximo)) {
        return 
    }

    let lista = "";

    for(let i = 0; i < carros.length; i++) {
        if(carros[i].preco <= maximo) {
            lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)}` + "\n"
        }
    }

    let outLista = document.getElementById('outLista');

    if(lista == "") {
        outLista.textContent = `Não há carros com preço até ${maximo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    } else {
        outLista.textContent = `Carros até R$ ${maximo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}:` + "\n------------------------\n" + lista; 
    }
}


