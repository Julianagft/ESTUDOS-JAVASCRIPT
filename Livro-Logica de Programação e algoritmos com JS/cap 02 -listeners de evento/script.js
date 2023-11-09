
function mostrarOla() {
    
    let nome = document.getElementById("nome").value;
    
    let resposta = document.getElementById("resposta");
    
    resposta.textContent = `Olá ${nome}`;
    }


    // cria uma referência ao botão (com id=) mostrar
    let mostrar = document.getElementById("mostrar");
    // registra para o botão "mostrar" um ouvinte para o evento click,
    // que ao ser clicado irá chamar a função mostrarOla
    mostrar.addEventListener("click", mostrarOla);