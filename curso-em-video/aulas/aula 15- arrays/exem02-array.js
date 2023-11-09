let num = [5,8,7,9]

console.log(`O vetor tem ${num.length} elementos`);
console.log(`O primeiro elemento do meu vetor é o ${num[0]}`)
console.log(`O ultimo elemento do meu vetor é o ${num[4]}`)

//A ordem do código influencia muito, por exemplo: 

num.sort() 
num.push(1)
console.log(num) //Os numeros aparecerão na ordem exceto pelo ultimo pois ele foi incluido depoois da função sort(). A ordem das declarações importa muito em JS.