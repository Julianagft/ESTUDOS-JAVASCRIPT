// FUNÇÃO RECUSIVA

function qualquer (z, k) {
    if(z === k || z === 0) {
        return 1
    } else {
        return qualquer(z-1, k) + qualquer(z-1, k-1)
    }
}

let a = 4;

console.log(qualquer(a, a-1))