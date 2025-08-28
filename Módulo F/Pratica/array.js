//Todos os elementos são do mesmo tipo (números, strings, etc).

//Lista de idades
let idades = [14, 16, 18, 25]

console.log(`Idade da primeira pessoa é ${idades[0]}`)
console.log(`idade da quarta pessoa é ${idades[3]}`)
console.log(`quantidade de idades na lista é de ${idades.length}`)

//Percorrendo o array com for
for(let i = 0; i < idades.length; i++) {
    console.log(`Pessoa ${i+1} tem ${idades[i]} anos`)
}