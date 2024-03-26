function inicio () {
    let vetor = [81, 37, 51, 77, 19]
    let naosei
    let achou = true

    while(achou) {
        achou = false
        for (let i = 0; i < vetor.length - 1; i++) {
            if(vetor[i] > vetor[i+1]) {
                naosei = vetor[i]
                vetor[i] = vetor[i+1]
                vetor[i+1] = naosei
                achou = true
            }
        }
    }

    for (let i = 0; i <5; i++) {
        console.log(vetor[i] + "\n")
    }
}