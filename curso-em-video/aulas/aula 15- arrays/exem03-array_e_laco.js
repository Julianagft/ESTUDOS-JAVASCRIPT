//Arrays com estruturas de repetição!

let num = [5,8,7,9,1,3]

for(let pos = 0; pos<num.length; pos++) {
   // console.log(num[pos])
    console.log(`A posição ${pos} tem o valor ${num.sort()[pos]}`)//assim eles aparecem em ordem crescente;
}

//a ideia desse codigo é para que os números apareçam de um por um sem que eu precise ficar repetindo o comando várias vezes;