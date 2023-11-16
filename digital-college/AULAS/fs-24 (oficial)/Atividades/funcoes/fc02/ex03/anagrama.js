

function anagrama(p1,p2) {

    p1 = p1.replace(/\s/g, '').toLowerCase();
    p2 = p2.replace(/\s/g, '').toLowerCase();

    if(p1.length !== p2.length) {
        return false
    }

    const arrayPalavra1 = p1.split('').sort();
    const arrayPalavra2 = p2.split('').sort();

    for(let i = 0; i< p1.length; i++) {
        if (arrayPalavra1[i] !== arrayPalavra2[i]) {
            return false 
        }
    }

    return true
}

const palavra1 = "Opta";
const palavra2 = "pato"

if(anagrama(palavra1, palavra2)){
    console.log(`As palavras ${palavra1} e ${palavra2} são anagramas!`)
} else{
    console.log(`As palavras ${palavra1} e ${palavra2} não são anagramas!`)
}