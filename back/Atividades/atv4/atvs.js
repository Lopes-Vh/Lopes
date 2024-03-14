import Ent from 'readline-sync';

/* Soma multiplicador*/
let multiplicador = Ent.questionFloat("Informe um Numero: ")
let conta = 1;
while(conta<=10){
    let resultado = multiplicador*conta
    console.log (`${multiplicador}x ${conta} = ${resultado}`)
    conta++
}

/* Soma notas*/




const numAlunos = 4; 

let somaTotal = 0;

for (let i = 1; i <= numAlunos; i++) {
    console.log(`Aluno ${i}:`);
    let nota1 = Ent.questionFloat("Digite a nota do 1° bimestre: ");
    let nota2 = Ent.questionFloat("Digite a nota do 2° bimestre: ");
    let nota3 = Ent.questionFloat("Digite a nota do 3° bimestre: ");
    let nota4 = Ent.questionFloat("Digite a nota do 4° bimestre: ");

    let mediaAluno = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(`A média do Aluno ${i} é ${mediaAluno.toFixed(2)}\n`);


    somaTotal += mediaAluno;
}


let mediaTurma = somaTotal / numAlunos;
console.log(`A média da turma é ${mediaTurma}`);
