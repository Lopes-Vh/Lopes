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


let aluno = Ent.questionInt ('digite a quantia de alunos: ')
let cont = 0

while(cont<=aluno){
    let nota1 = Ent.questionFloat("Digite a nota do 1° bimestre: ")
    let nota2 = Ent.questionFloat("Digite a nota do 2° bimestre: ")
    let nota3 = Ent.questionFloat("Digite a nota do 3° bimestre: ")
    let nota4 = Ent.questionFloat("Digite a nota do 4° bimestre: ")
    let soma = (nota1+nota2+nota3+nota4) /4
    console.log(`sua nota é ${soma}`)
}

