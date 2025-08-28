function soma(n1=0, n2=0){ //parâmetros pré-incrementado
    return n1 + n2
}

let res = soma(3, 5)
console.log(res)

//Jogando uma função dentro de uma variavel
let v = function(x) {
    return x * 2
}
console.log(v(2))