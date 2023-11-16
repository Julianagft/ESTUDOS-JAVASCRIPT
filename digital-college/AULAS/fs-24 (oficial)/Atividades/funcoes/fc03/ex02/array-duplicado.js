function temDuplicados(array) {
    array = new Set(array);
    const arrayNaoDuplicado = Array.from(array);
    console.log(`A lista sem números duplicados é ${arrayNaoDuplicado}`);
}

const meuArray = [1, 2, 3, 4, 5, 1];

temDuplicados(meuArray);