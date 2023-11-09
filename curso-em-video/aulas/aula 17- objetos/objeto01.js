let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0) {
    this.peso += p // 'this' é uma palavra de autoreferência ao objeto;
 }
}

// console.log(amigo);
// console.log(amigo.nome);
// console.log(amigo.sexo);
// console.log(amigo.peso + 'kg');
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)