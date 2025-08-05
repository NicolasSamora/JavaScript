/*Condição composta com operador Ternário (Usado mais para condições mais simples de Se SIM e SENÂO)

var pais = 'Espanha'
console.log(`Estou vivendo em ${pais} ${pais == 'Espanha' ? 'Sou Espanhol' : 'Sou Estrangeiro'}`)
*/

//Condição composta com as condições IF e ELSE (Usado para condições maiores de Se SIM e SENÂO )
var pais = 'Espanha'
console.log(`Estou vivendo em ${pais}`)
if (pais != 'Brasil') {
    console.log("Sou estrangeiro")
} else {
    console.log("Sou Brasileiro")
}