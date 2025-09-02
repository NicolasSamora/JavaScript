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
    if( l != Number(n)) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(numeros(num.value) && lista(num.value, valores)) {
        //Armazenando os numeros digitados em um array
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi cadastrado`
        lis.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontrado na lista!')
    }
    num.value = ''
}

function finalizar() {

}

function Limpdado() {
    valores = []
    res.innerHTML = ''
    lis.innerHTML = ''
}

