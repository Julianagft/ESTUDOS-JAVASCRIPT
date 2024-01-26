let input = document.getElementById('inputCalc');
let result = document.getElementById('resultCalc');

document.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        const resultCalc = eval(input.value);

        result.innerText = resultCalc;

        const historicItem = {
            calc: input.value,
            result: resultCalc,
        }

        const previousValues = JSON.parse(window.localStorage.getItem("historic")) || []; //Evita o erro do "null". Na primeira vez que for executado vai cair no array vazio.
        

        previousValues.push(historicItem);

        window.localStorage.setItem("historic", JSON.stringify(previousValues));
    }
})

