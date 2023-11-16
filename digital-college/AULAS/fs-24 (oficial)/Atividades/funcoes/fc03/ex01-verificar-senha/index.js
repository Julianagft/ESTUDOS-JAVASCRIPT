


function verificarSenha(senha) {

    if(senha.length < 8) {
        return false;
    }

    if(!/[A-Z]/.test(senha)) {
        return false;
    }

    if(!/[a-z]/.test(senha)) {
        return false;
    }

    if(!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        return false;
    }

    // Se todos os critérios tiverem sido atendidos.
    return true
}

function validaSenha() {
    const senha = document.getElementById('insenha').value;

    if (verificarSenha(senha) == true) {
        alert(`Sua senha foi cadastrada com sucesso!`) 
    } else {
        alert(`Senha Inválida! Verifique os requisitos necessários e tente novamente.`) 
    }
}