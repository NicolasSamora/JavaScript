//Condição Aninhada
/*var idade = 10

console.log(`Sua idade é de ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 67) {
    console.log("Voto opcional")
} else {
    console.log('Voto obrigatório')
}
*/

var horat = new Date()
var horario = horat.getHours()

console.log(`Agora são extamente ${horario} horas`)
if (horario >= 6 && horario <= 12) {
    console.log('Bom dia')
} else if (horario >= 13 && horario <= 18) {
    console.log('Boa tarde')
} else if (horario >= 19 && horario <= 23) {
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}