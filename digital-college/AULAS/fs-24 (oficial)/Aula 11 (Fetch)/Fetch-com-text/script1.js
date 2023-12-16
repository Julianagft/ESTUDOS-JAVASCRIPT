const url = `https://imersao.ronierlima.dev/index.html`;

const retorno = fetch(url);

retorno.then((resposta) => {

    const texto = resposta.text()
    
    texto.then((resposta) => {
        console.log(resposta)
    })
})