let idade = Number(prompt('Qual a sua idade?'))

if (idade < 17){
    alert('Você é um adolescente. Ainda não pode dirigir!')
} else if (idade === 18) {
    alert('Você tem 18. Pode dirigir!')
} else {
    alert('Você é um adulto. Pode dirigir!')
}

