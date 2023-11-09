//Transformar musica Losing My Grip de segundos para minutos;

let musica = 233;

let musi_min = parseInt(musica /60);

let seg = musica % 60;

console.log(`${musi_min.toString().padStart(2,0)}:${seg}`);




