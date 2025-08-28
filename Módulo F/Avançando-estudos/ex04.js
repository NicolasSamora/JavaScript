//Funções recebendo parâmetros
function parimp(n) {
    if(n%2==0){
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp(5)
console.log(res)

//Outro exemplo. Fatorial de um numero
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(2))

//Recursividade
function fatorial(x) {
    if(x == 1) {
        return 1
    } else {
        return x * fatorial(x-1)
    }
}
console.log(fatorial(10))