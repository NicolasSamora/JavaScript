let num = document.getElementById('txtnum')
let lis = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

//Verificando se o numero digitado esta entre 1 e 100
function numeros(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//Verificando se o numero da lista ja foi digitado
function lista(n, l) {
    if( l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(numeros(num.value) && !lista(num.value, valores)) {
        //Armazenando os numeros digitados em um array
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi cadastrado`
        lis.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert("Adicione os valores antes de finalizar!")
    } else {
        let tot = valores.length //Tot recebe o tamanho do array
        let maior = valores[0] //Maior recebe o valor do indice[0]
        let menor = valores[0] //Menor recebe o valor de indice[0]
        let soma = 0
        let media = 0

        for(let c in valores){
            soma += valores[c]
            if(valores[c] > maior){
                maior = valores[c]
            }
            if(valores[c] < menor){
                menor = valores[c]
            }
            media = soma / tot
        }
        res.innerHTML = `<p>Ao todo, temos ${tot} valores cadastrados</P>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`
        res.innerHTML +=  `<p>A soma entre os valores cadastrados é de ${soma}`
        res.innerHTML += `<p>A media dos valores cadastrados é de ${media.toFixed(2)}`
    }
}

function Limpdado() {
    valores = []
    res.innerHTML = ''
    lis.innerHTML = ''
}

