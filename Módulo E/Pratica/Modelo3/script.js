function Contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    //Verificando possiveis erros
    if(ini.value.length == 0 || Number(ini.value) < 0) {
        res.innerHTML = 'Impossivel contar!'
    } else if(fim.value.length == 0 || Number(fim.value) <= 0) {
        res.innerHTML = 'Impossivel contar!'
    } else if(passo.value.length == 0 || Number(passo.value) <= 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('Passo invalido! Considerando PASSO 1!')
        passo.value = 1

    //Fazendo a contagem
    } else {
        let n1 = Number(ini.value)
        let n2 = Number(fim.value)
        let n3 = Number(passo.value)
        res.innerHTML = 'Contando: <br>'
        if (n1 < n2){
            //Contagem crescente
            for(let c = n1; c <= n2;c += n3) {
                res.innerHTML += `${c}\u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(let c = n1; c >= n2; c -= n3) {
                res.innerHTML += ` ${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}