import chalk from 'chalk';
import fs from 'fs'; //verifiica se o que esta chegando é o caminho de um diretório ou o caminho de um arquivo específico;
import pegaArquivo from './index.js';

const caminho = process.argv;

function imprimeLista(resultado, identificador = '') {
    console.log(
        chalk.yellow('lista de links:'),
        chalk.black.bgGreen(identificador),
        resultado); 
}

async function processaDados(argumentos) {
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch(erro) {
        if (erro.code === 'ENOENT') {
            console.log('Arquivo ou diretório não existe.')
            return;
        }
    } 

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(lista, nomeDeArquivo);
        })
    }
}

processaDados(caminho);