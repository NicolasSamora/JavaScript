//Criando um array hômogeneo para armazenar os nomes dos alunos
let alunos = ['Lucas', 'Pedro', 'João']

//Criando uma matriz hômogenea para armazenar as notas dos alunos
let notas = [
    [9, 7, 5], //Lucas
    [4, 5, 9], //Pedro
    [8, 9, 6], //João
];

//Criando um objeto hetêrogeneo para representar informações extras dos alunos
let alunoExtra = {
    nome: 'Lucas',
    idade: 18,
    matriculado: true
};

//Mostrando os nomes e suas notas com laços
for(let i = 0; i < alunos.length; i++){
    console.log(`\nAluno: ${alunos[i]}`)

    let soma = 0

    for(let j = 0; j < notas[i].length; j++){
        console.log(`Nota ${j+1}: ${notas[i][j]}`)

        soma += notas[i][j]//Soma das notas dos alunos, (soma recebe ela mesma + as notas[indice][nota]) ex: soma = notas[0=Pedro][0=4] etc
    }

    let media = soma / notas[i].length //media recebe let soma que contem as notas dividido pelo tamanho do array notas, que é 3
    console.log(`Media: ${media.toFixed(2)}`)


}
console.log('\nInformações extras do objeto alunoExtra: ')
console.log(`Nome: ${alunoExtra.nome}`)
console.log(`Idade: ${alunoExtra.idade}`)
console.log(`Matriculado: ${alunoExtra.matriculado ? 'sim' : 'não'} `)