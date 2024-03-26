let w = [2, 13, 11, 9, 7, 0];
let z = [3, 10, 11, 8, 0, 4]

for (let i = 0; i <6; i++) {
    if(w[i] > z[i]) {
        let x = z[i];
        z[i] = w[i];
        w[i] = x;
    } else {
        w[i] = w[i] * 2;
        z[i] = z[i] * 3;
    }
}

let u = 0;
let p = 0;

for(let i = 0; i < 6; i++) {
    u = u + w[i];
    p = p + z[i];
}

console.log(u, p);

