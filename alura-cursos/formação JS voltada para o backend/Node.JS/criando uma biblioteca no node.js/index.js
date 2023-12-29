import fs from 'fs'; // Como é uma biblioteca nativa do node não precisamos instalar, apenas importar;

import chalk from 'chalk'
// Para usarmos sintaxe de modulo de forma que funcione no node.js precisamos ir no packge.json e "avisar" que estamos usando a sintaxe de modulo.

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; //g = global e m = multilinha

    const capturas = [...texto.matchAll(regex)] //o matchAll retorna um objeto iterável. Por isso usamos o spread operator 

    const resultados = capturas.map(captura => ({[captura[1]] : captura[2]}) ) 
            // Sobre a sintaxe de javaScript: 
            // 1. Quando temos essa estrutura onde precisamos acessar um array e o índice desse array e queremos usar esse valor como chave de um objeto precisamos empacotá-los entre colchetes.
            // 2. No momento que abrimos chaves para criar o objeto e retorná-lo dentro da nossa função precisamos que o JS identifique que essas chaves não são chaves de função mas sim de objeto e para isso precisamos englobar todo o objeto que está sendo criado dentro de parêntesis; 

            return resultados;
}        

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
    // Todo objeto erro tem uma propriedade dentro dele que é o código do erro.
}

async function pegaArquivo(caminhoArquivo) {
    try {
        const encoding = 'utf-8';
        const dados = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(extraiLinks(dados));    
    } catch(erro) {
        tratarErro(erro);
    }
    // TRADUÇÃO: pegaArquivo é um função asíncrona e precisamos esperar (await) o retorno de uma parte específica do códico, no caso é  
}
pegaArquivo('./arquivos/texto.md');

// \[[^[\]]*?\] (capturando os colchetes e seu conteúdo)
// \(https?:\/\/[^\s?#.].[^\s]*\) (capturando links e todos os seus caracteres)

// JUNÇÃO DOS GRUPOS: \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)