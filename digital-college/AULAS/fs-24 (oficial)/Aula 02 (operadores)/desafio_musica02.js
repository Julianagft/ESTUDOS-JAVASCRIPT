//Transformar musica Hotel California de segundos para minutos acrescentando o zero antes do minuto;

let musica = 390;

let musi_min = parseInt(musica /60);

let seg = musica % 60;

console.log(`${musi_min.toString().padStart(2,'0')}:${seg}`);

//.padStart(2,0): '2' é a quantidade de casas que eu quero e o '0' o número que vai aparecer;



