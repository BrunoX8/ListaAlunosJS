/* cálculo de médias */
let nome;
let firstGrade;
let secondGrade;
let num;

let alunos = [];

num = Number(prompt("Digite a quantidade de alunos: "));

for(let aluno = 0; aluno < num; aluno++)
{
    let aluno = {
        nome: prompt(`Digite o nome do(a) aluno(a): `),
        firstGrade: Number(prompt('Digite a primeira nota do(a) aluno(a): ')),
        secondGrade: Number(prompt('Digite a segunda nota do(a) aluno(a): ')),
    }
    alunos.push(aluno);
}

function calculaMedia(aluno)
{
    return ((aluno.firstGrade + aluno.secondGrade)/2).toFixed(2);
}

function aprovaAluno(aluno)
{
    let media = calculaMedia(aluno);

    if(media >= 7)
    {
        alert("A média do aluno(a) " + aluno.nome + " é: " + media + "\n"
        + "Parabéns " + aluno.nome + " você foi aprovado(a) no concurso!");
    }
    else
    {
        alert("Não foi dessa vez " + aluno.nome + ". Tente novamente!");
    }
}

for(let aluno of alunos) {
    let message = aprovaAluno(aluno);
} 