function retornarUmaFuncao() {
    return function (){
        return "Boa Tarde!";
    }
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());

 