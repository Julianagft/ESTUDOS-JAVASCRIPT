let t1 = false; 
let t2 = true; 

let comprarTv50 = t1 && t2; // AND
console.log ("Vamos comprar a TV de 50''?", (t1 && t2));

let comprarTv32 = t1 !== t2;// XOR
console.log ("Vamos comprar a TV de 32''?", (t1 !== t2));

let tomarSorvete = t1 || t2; // OR
console.log ("Vamos comprar sorvete?", tomarSorvete);

let ficarEmcasa =! tomarSorvete; // NOT
console.log ("Vamos ficar em casa?", ficarEmcasa);

