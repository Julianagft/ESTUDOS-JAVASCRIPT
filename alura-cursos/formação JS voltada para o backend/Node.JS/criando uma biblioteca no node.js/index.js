import fs from 'fs'; // Como é uma biblioteca nativa do node não precisamos instalar, apenas importar;

import chalk from 'chalk'
// Para usarmos sintaxe de modulo de forma que funcione no node.js precisamos ir no packge.json e "avisar" que estamos usando a sintaxe de modulo.

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
    // Todo objeto erro tem uma propriedade dentro dele que é o código do erro.
}

async function pegaArquivo(caminhoArquivo) {
    try {
        const encoding = 'utf-8';
        const dados = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.green(dados));    
    } catch(erro) {
        tratarErro(erro);
    }
    

    // TRADUÇÃO: pegaArquivo é um função asíncrona e precisamos esperar (await) o retorno de uma parte específica do códico, no caso é  

    // usando o método readFile 
    // fs.readFile(caminhoArquivo, encoding, (erro, dados) => {
    //     if(erro) {
    //         tratarErro(erro);
    //     }
    //     console.log(chalk.green(dados));
    // } )
}

pegaArquivo('./arquivos/texto.md');

 