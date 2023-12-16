


function buscarCidades() {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios`
    fetch(url)

    .then((resposta) => {
        // transforma a resposta em json e retorna uma nova promisse; 
        return resposta.json()
        
    })
    .then((json) => {

        const listaOrdenada = document.createElement('ol');

        json.forEach((array) => {
            const cidade = array.nome

            const li = document.createElement('li');
            li.textContent = cidade;
            listaOrdenada.appendChild(li)
        })

        document.body.appendChild(listaOrdenada)

    })
}

function addElemento(array) {
    
}

buscarCidades()
