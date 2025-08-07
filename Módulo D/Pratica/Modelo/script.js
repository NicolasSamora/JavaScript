function carregar() {
    let msg = document.getElementById('msg')
    let foto = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        foto.src = 'imagens/Manha.jpg'
        msg.innerHTML = `Agora são ${hora} horas <br> Bom Dia!`
        document.body.style.background = 'linear-gradient(to bottom, #ddb076, #d8ba94ff )'

    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'imagens/Tarde.jpg'
        msg.innerHTML = `Agora são ${hora} horas <br> Boa Tarde!`
        document.body.style.background = 'linear-gradient(to bottom, #b47a4aff, #d49366)'

    } else {
        foto.src = 'imagens/Noite.jpg'
        msg.innerHTML = `Agora são ${hora} horas <br> Boa Noite!`
        document.body.style.color = 'white'
        document.body.style.background = 'linear-gradient(to bottom, #001d3d, #0e3c69ff)'
    }
}