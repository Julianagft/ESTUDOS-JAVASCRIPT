//Digamos que eu queira repetir um comando diversas vezes EX: console.log('Tudo Bem?'); 
//Para evitar que eu copie e cole esse comando muitas vezes (se fossem 500 ou mil por exemplo o codigo ficaria muito poluido), usamos as repetições;

let cont = 1;

while (cont <= 6) { //Vai repetir 5 vezes e vai parar em 6 quando a condição parar de ser verdadeira (será maior que 6 )
    console.log(`Passo ${cont}`);
    cont ++ // (cont = cont + 1)
}

//Laço mais simples, quando escolhemos quantas vezes uma coisa vai acontecer;