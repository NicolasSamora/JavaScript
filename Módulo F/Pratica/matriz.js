//É um array de arrays, acessado por linha e coluna.

//Exemplo: tabela de notas (3 alunos x 3 matérias)

let notas = [
    [5, 4, 7], // Aluno 1
    [3, 8, 5],// Aluno 2
    [5, 9, 10] // Aluno 3
];

console.log(`Nota do aluno 2 em Geografia:`, notas[1][2]);//Coluna de indice (1) Linha de indice (2)
console.log('Nota do aluno 3 em Matemática:', notas[2][0])//Coluna de indice (2) Linha de indice (0)

//Percorrendo a matriz com 2 for
for(let n = 0; n < notas.length; n++){
    for(let ni = 0; ni < notas[n].length; ni++){
        console.log(`Aluno ${n+1}, Matéria ${ni+1}: ${notas[n][ni]}`);

    }
}