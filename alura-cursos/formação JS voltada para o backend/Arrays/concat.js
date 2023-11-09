// Juntando elementos;
// (*) Não altera o Array original;

const salaJS = ['Camila', 'Evaldo', 'Isabela'];

const salaPhyton = ['Aline', 'Claudio', 'Felipe'];

const salasUnificadas = salaJS.concat(salaPhyton); 

console.log(salasUnificadas);

// O resultado foi um novo array com todos os elementos de salaJS e salaPhyton; isso acontece pois, quando o concat() recebe um array como parâmetro, são apenas os elementos dentro dele que são concatenados, e não o array em si.