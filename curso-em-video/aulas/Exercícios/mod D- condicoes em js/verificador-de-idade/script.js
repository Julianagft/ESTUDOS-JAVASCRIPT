function verificar() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let anoNascimento = document.querySelector('#txtano');
    let res = document.getElementById('res');
        
    if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else  {
        let fsex = document.getElementsByName('radsex');
        let idade = anoAtual - Number(anoNascimento.value);

        let img = document.createElement('img')
        img.setAttribute('id', 'foto');
        let genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade < 5 ){ //Vamos definir a idade baseado no genero;
                //bebe
                img.setAttribute('src', 'img/homem-bebe.jpg')
            } else if (idade >= 5 && idade < 15) {
                //criança
                img.setAttribute('src', 'img/homem-crianca.jpg')
            } else if (idade  < 18) {
                //Jovem
                img.setAttribute('src', 'img/homem-ado.jpg')
            } else if (idade  < 35) {
                //Jovem-adulto
                img.setAttribute('src', 'img/homem-jovem.jpg')
            } else if (idade < 65) {
                //Adulto 
                img.setAttribute('src', 'img/homem-adulto.jpg')
            } else {
                //Sênior
                img.setAttribute('src', 'img/homem-idoso.jpg')
            }
               
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade < 5 ){
                //bebe
                img.setAttribute('src', 'img/mulher-bebe.jpg')
            } else if (idade >= 5 && idade < 15) {
                //criança
                img.setAttribute('src', 'img/menina-crianca.jpg')
            } else if (idade  < 18) {
                //Jovem
                img.setAttribute('src', 'img/mulher-ado.jpg')
            } else if (idade  < 35) {
                //Jovem
                img.setAttribute('src', 'img/mulher-jovem.jpg')
            } else if (idade < 65) {
                //Adulto 
                img.setAttribute('src', 'img/mulher-adulto.jpg')
            } else {
                //Sênior
                img.setAttribute('src', 'img/mulher-idosa.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`;
        res.appendChild(img); //Adiciona o elemento imagem; 
        res.style.textAlign = 'center';
        res.style.color = '#F22738'
        res.style.fontWeight = 'bold'
        
    

    }
}