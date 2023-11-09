const usuario = {
    email: 'aluno@gmail.com'
};

usuario.nome = 'Aluno';
usuario.senha = '123456';

console.log(usuario.email);
console.log(usuario.nome); //voltará como 'undefined' pq não defini;
// Porém quando defini fora do objeto ele voltará como 'ALUNO';
console.log (usuario); //Caso queira mostrar o objeto inteiro (mostra inclusive os atributos 'NOME' e 'SENHA' que criei de forma dinâmica);


//POSSO CRIAR DENTRO DOS OBJETOS OS ATRIBUTOS QUE EU QUEIRA DE FORMA DINÂMICA;


