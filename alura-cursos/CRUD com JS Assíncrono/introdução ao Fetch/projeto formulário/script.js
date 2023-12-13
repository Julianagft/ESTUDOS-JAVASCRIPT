const btnPesquisarCEP = document.querySelector("#btnPesquisar");
const btnLimpar = document.querySelector('#btnLimpar');

btnPesquisarCEP.addEventListener("click", event => {
    event.preventDefault(); // cancela o comportamento natural do botão que seria uma submissão para o servidor.
    buscarCep();   
});

btnPesquisarCEP.addEventListener("keydown", event => {
        event.preventDefault(); // cancela o comportamento natural do botão que seria uma submissão para o servidor.
        buscarCep();
});

function buscarCep() {
    const inputDoCep = document.querySelector('#cep');
    const valorDoCep = inputDoCep.value;
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;
   
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            atribuirCampos(data); //
        })
}
// O fetch devolve uma promessa de que algo será retornado, essa promessa é chamada de Promisse. Essa promessa pode tanto ser boa, ter retornado os dados, quanto ter falhado por algum motivo - como no caso da conexão com o servidor cair.

// Para ambas as situações precisamos fazer um tratamento. No caso, só vou tratar no caso de sucesso. Por isso, se for um sucesso, então (then) vamos pegar a resposta com as informações do CEP:

function atribuirCampos(data) {
    const rua = document.querySelector("#rua");
    const complemento = document.querySelector("#complemento");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");

    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
 }

 btnLimpar.addEventListener("click", event => {
    const campos = ["#cep", "#rua", "#complemento", "#bairro", "#cidade", "#estado"];

    campos.forEach((campo) => {
        document.querySelector(campo).value = "";
    });
 })

