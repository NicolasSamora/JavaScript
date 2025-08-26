//Mais testes com ararys
/*
let val = [3,5,67,7,9]

for(let pos = 0; pos < val.length; pos++){
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}
*/

//Simplificando as coisas
let val = [3,5,67,7,9]
val.sort()
for(let pos in val) {//Lendo o código: Para cada posição(pos), na variavel composta(val) acrecenta o console
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}