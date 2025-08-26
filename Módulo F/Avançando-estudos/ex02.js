let num = [2,4,6,73,5,]
//Oragnizando os valores do array em ordem crescente
num.sort()

console.log(num)
//Atributo para saber o comprimento de um array
console.log(`O array tem ${num.length} posições`)

console.log(`O primeiro valor do array é ${num[0]}`)

//Fazendo buscas em um array
let pos = num.indexOf(3)
if(pos == -1) {
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
