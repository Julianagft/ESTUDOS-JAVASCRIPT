let num = [5,8,7,18]

console.log(num)

num[3] = 6 // Vai criaar ou substituir esse valor na posição '3' do array;
console.log(num)

num.push(2) //.push acrescenta o elemnto na ultima posição do array 
console.log(num)

num.length //pra saber qual o tamanho do Array;
console.log(num.length)

num.sort() //pega todos os elementos e coloca em ordem crescente;
console.log(num.sort())

num.indexOf(7) //mostra  onde no index se encontra o elemnto. Caso o elemento não exista dentro do array ele retorna (-1);
console.log(num.indexOf(7));
console.log(num.indexOf(18)); //como o '18' foi substituido ele "não existe mais" logo o retorno é -1;