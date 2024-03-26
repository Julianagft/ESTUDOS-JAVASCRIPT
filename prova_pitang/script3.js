let veet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(veet[5])

let a = 0;

for (let z = 1; z <= 14; z++) {
    let b = z + 1;
    veet[z] = b + (3 * z);
    if (z > 0) {
        if (veet[b] < veet[z]) {
            a = a + 2;
        } else {
            a = a - 1;
        }
    }
}

if (veet[5] > veet[10]) {
    for (let z = 5; z <= 15; z++) {
        veet[z -1]++;
    }
} else {
    for(let z = 1; z <= 10; z++) {
        veet[z-1] -= 2;
    }
}

console.log(veet[5]);