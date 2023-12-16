const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios";

const cidades = document.getElementById('cidades');

function criarEAddElemento(cidade) {
    const cidadeOption = document.createElement("option");
    cidadeOption.textContent = cidade.nome;
  
    cidades.appendChild(cidadeOption);
}


async function buscarCidades() {
    const resposta = await fetch(url);
    const json = await resposta.json();

    json.forEach(criarEAddElemento);
}

buscarCidades()


