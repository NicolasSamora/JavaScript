function verificar() {
    let data = new Date().getFullYear()
    let fano = document.getElementById('ano')
    let res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > data ) {
        window.alert('Verifique se os dados estão corretamente preenchidos!')
    } else {
        let sexo = document.getElementsByName('Sexo')
        let idade = data - fano.value
        let genero = ''

        //Colocando imagem direto pelo JS (Mesma coisa que criar um <img id = 'foto'</img)
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Checando qual sexo foi prenchido
        if (sexo[0].checked) {
            genero = 'Homen'
            if (idade >= 5 && idade < 13) {
                img.setAttribute('src', 'imagens/h-crianca.jpg')
            } else if (idade >= 13 && idade < 21 ) {
                img.setAttribute('src', 'imagens/h-jovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imagens/h-adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }

        } else if (sexo[1].checked) {   
            genero = 'Mulher'
            if (idade >= 5 && idade < 13) {
                img.setAttribute('src', 'imagens/m-crianca.jpg')
            } else if (idade >= 13 && idade < 21 ) {
                img.setAttribute('src', 'imagens/m-jovem.jpg')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imagens/m-adulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }

        
    
}