let msg = document.getElementById('msg');
    let img = document.getElementById('foto'); 
    let titulo = document.querySelector('#titulo');

function carregar() {
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    //let hora = 22

    msg.innerHTML = `Agora são ${hora}:${min}!`

    if (hora >= 0 && hora < 12) {
        titulo.innerHTML = 'Bom Dia!'
        img.src = 'img/manha.jpg'
        document.body.style.background = 'rgba(242, 152, 119, 0.825)'
        document.querySelector('#titulo').style.color = '#D94929'

    } else if (hora >= 12 && hora < 18) {
        titulo.innerHTML = 'Boa Tarde!'
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#F28705'
        document.querySelector('#titulo').style.color = '#023E73'
    } else {
        titulo.innerHTML = 'Boa Noite!'
        img.src = 'img/noite.jpg'
        document.body.style.background = '#010B40'
        document.querySelector('#titulo').style.color = '#F28705'
    }
}
