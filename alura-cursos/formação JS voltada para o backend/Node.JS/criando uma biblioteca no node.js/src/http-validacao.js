// Pegar a lista e validar as URLs

function extrairLinks(arrayLinks) {
    //'Object.values': método para extrair apenas o valor do objeto;
    return arrayLinks.map((objetoLink) => Object.values(objetoLink).join()) //o 'join()' pega o conteúdo de um array e retorna uma string.
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async(url) => {
            try {
                const response = await fetch(url)
                return response.status
            } catch(erro) {
                return manejaErros(erro)
            }
            
        })
    )
    return arrStatus;
}

function manejaErros(erro) {
    if (erro.cause.code === 'ENOTFOUND') { //Esses atributos foram tirados de dentro do objeto erro que retornou no console.
        return 'Link não encontrado!'
    } else {
        return 'ocorreu algum erro'
    }
    console.log(chalk.red('Algo deu errado!'), erro)
}

export default async function listaValidada(listaLinks) {  
    const links =  extrairLinks(listaLinks);
    const status = await checaStatus(links);
    // os parenteses englobando as chaves é para que o js identifique que as chaves se referem ao objeto e não a função.
    return listaLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }));
}