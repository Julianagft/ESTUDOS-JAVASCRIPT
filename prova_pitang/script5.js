let A = 0;
let C = 0;

while (A < 4) {
    let B = calc(A);
    C += B;
    A++;
  }

  console.log(C);

  function calc(a) {
    if (a < 1) {
        return 0;
    } else if (a === 1) {
        return 1;
    } else if (a > 1) {
        return a + calc(a - 1);
    }
  }

  console.log(C)